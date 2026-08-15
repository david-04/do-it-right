{% if transformsInputText and generatesNewOutput %}
{% set _WhenAddingOrModifyingText = "When adding or modifying text" %}
{% elif transformsInputText %}
{% set _WhenAddingOrModifyingText = "When " + transforming + " the input text" %}
{% elif generatesNewOutput %}
{% set _WhenAddingOrModifyingText = "When generating the output" %}
{% else %}
{% include "⛔ Either transformsInputText or generatesNewOutput must be set" %}
{% endif %}

- The text may contain Markdown formatting.

{% if transformsInputText %}

- _
  - Always preserve all of the the input text's Markdown formatting.
  - The input text may contain code blocks. They are either indented or delimited by code fences (triple-backticks). Always preserve code blocks without any modifications. Do not rephrase, restructure, or reorder the contents within code blocks.
  - The input text may contain inline code (enclosed in single backticks, e.g. `identifier`). This often represents proper names, acronyms, or file paths. Preserve inline code without any modifications. Do not remove backticks around inline code either, even when the enclosed words don't sound like proper names.
  - The input text may contain links in the format `[description](url_or_path)` or `<url_or_path>`. Always preserve the URL or path without any modification. You may only change the description part of the link if necessary.

{% endif %}

{% if _WhenAddingOrModifyingText %}

- _
  - {{_WhenAddingOrModifyingText}}, do not introduce any Markdown formatting other than headers, lists (bullet point or numbered) or tables. Don't add or format text as underlined, bold or italic.

{% endif %}
