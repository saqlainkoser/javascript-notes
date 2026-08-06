import { visit } from "unist-util-visit"

const CSS = `
.lightbox-trigger {
  display: inline-block;
  line-height: 0;
  position: relative;
  cursor: zoom-in;
}
.lightbox-trigger img {
  transition: box-shadow 0.2s ease, opacity 0.2s ease;
  border-radius: 4px;
}
.lightbox-trigger:hover img {
  opacity: 0.92;
  box-shadow: 0 0 0 3px var(--secondary);
}
.lightbox-modal {
  position: fixed;
  inset: 0;
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.92);
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.25s ease, visibility 0.25s ease;
  cursor: zoom-out;
  padding: 1rem;
  box-sizing: border-box;
}
.lightbox-modal.active {
  opacity: 1;
  visibility: visible;
}
.lightbox-modal img {
  max-width: 92vw;
  max-height: 92vh;
  width: auto;
  height: auto;
  object-fit: contain;
  border-radius: 6px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.55);
  transform: scale(0.95);
  transition: transform 0.25s ease;
}
.lightbox-modal.active img {
  transform: scale(1);
}
.lightbox-close {
  position: absolute;
  top: 0.75rem;
  right: 1rem;
  font-size: 2.2rem;
  line-height: 1;
  color: #fff;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.25rem 0.5rem;
  opacity: 0.8;
  z-index: 10001;
}
.lightbox-close:hover {
  opacity: 1;
}
.lightbox-caption {
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  text-align: center;
  color: #ddd;
  font-size: 0.9rem;
  padding: 0 1rem;
  pointer-events: none;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
@media (prefers-reduced-motion: reduce) {
  .lightbox-modal,
  .lightbox-modal img {
    transition: none;
  }
}
`

const JS = `
(function () {
  var modal = null

  function openLightbox(src, alt) {
    if (!modal) {
      modal = document.createElement("div")
      modal.className = "lightbox-modal"
      modal.setAttribute("role", "dialog")
      modal.setAttribute("aria-modal", "true")
      modal.innerHTML =
        '<button class="lightbox-close" aria-label="Close">&times;</button>' +
        '<img alt="" />' +
        '<div class="lightbox-caption"></div>'
      document.body.appendChild(modal)
      modal.addEventListener("click", function (e) {
        if (e.target === modal) closeLightbox()
      })
      modal.querySelector(".lightbox-close").addEventListener("click", function (e) {
        e.stopPropagation()
        closeLightbox()
      })
    }
    var img = modal.querySelector("img")
    img.src = src
    img.alt = alt || ""
    var caption = modal.querySelector(".lightbox-caption")
    caption.textContent = alt || ""
    modal.classList.add("active")
    document.body.style.overflow = "hidden"
  }

  function closeLightbox() {
    if (!modal || !modal.classList.contains("active")) return
    modal.classList.remove("active")
    document.body.style.overflow = ""
  }

  document.addEventListener("click", function (e) {
    var trigger = e.target.closest ? e.target.closest(".lightbox-trigger") : null
    if (trigger) {
      e.preventDefault()
      openLightbox(
        trigger.getAttribute("data-src"),
        trigger.getAttribute("data-alt"),
      )
    }
  })

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeLightbox()
      return
    }
    if (e.key === "Enter" && e.target && e.target.classList && e.target.classList.contains("lightbox-trigger")) {
      openLightbox(
        e.target.getAttribute("data-src"),
        e.target.getAttribute("data-alt"),
      )
    }
  })

  if (window.addCleanup) {
    window.addCleanup(function () {
      if (modal && modal.parentNode) modal.parentNode.removeChild(modal)
      document.body.style.overflow = ""
    })
  }
})()
`

export const ClickableImages = () => {
  return {
    name: "ClickableImages",
    htmlPlugins() {
      return [
        () => (tree) => {
          visit(tree, "element", (node, index, parent) => {
            if (node.tagName !== "img" || !parent || index === undefined) return
            const src = node.properties?.src
            if (!src || typeof src !== "string") return
            const alt = node.properties?.alt ?? ""
            parent.children[index] = {
              type: "element",
              tagName: "span",
              properties: {
                className: ["lightbox-trigger"],
                "data-src": src,
                "data-alt": alt,
                role: "button",
                tabIndex: 0,
                title: "Click to zoom",
              },
              children: [node],
            }
          })
        },
      ]
    },
    externalResources() {
      return {
        css: [{ inline: true, content: CSS }],
        js: [{ loadTime: "afterDOMReady", contentType: "inline", script: JS }],
      }
    },
  }
}

export default ClickableImages
