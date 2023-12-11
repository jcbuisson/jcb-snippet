import { LitElement, html, css } from 'lit'
import 'prismjs'

// Import only the necessary languages for syntax highlighting
// import 'prismjs/components/prism-html'
import 'prismjs/components/prism-css'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-bash'

import 'prismjs/themes/prism.css'


class CodeSnippet extends LitElement {
   static styles = css`
      :host {
         display: block;
         font-family: 'Courier New', Courier, monospace;
      }

      pre {
         margin: 0;
         padding: 1em;
         overflow: auto;
         border: 1px solid #ddd;
      }
   `;

   static properties = {
      code: { type: String },
      language: { type: String },
   }

   render() {
      return html`
         <pre><code class="language-${this.language}">${this.code.trim()}</code></pre>
      `
   }

   updated(changedProperties) {
      super.updated(changedProperties)
      // Reinitialize Prism.js when the code changes
      if (changedProperties.has('code')) {
         console.log('highlight!')
         Prism.highlightAll()
      }
   }
}

customElements.define('jcb-snippet', CodeSnippet)
