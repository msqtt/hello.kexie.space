const MarkdownIt = require('markdown-it')
const hljs = require('highlight.js')
const md = new MarkdownIt({
    highlight: function (str: string, lang: string) {
        try {
            return '<pre class="code-block"><code>' +
                hljs.highlight(str, { language: lang }).value +
                '</code></pre>'
        } catch (__) { }
        return '';
    }
});

const MarkdownParser = {
    render: (content: string) => md.render(content)
}
export default MarkdownParser