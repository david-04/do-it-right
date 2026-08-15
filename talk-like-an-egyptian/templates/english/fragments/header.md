{% include "./assert-variables.md" %}

Your task is to restyle a given text to make it sound like {{ what }}.

# General rules and constraints

- The input text may contain Markdown formatting.

  - Always preserve all of the the input text's Markdown formatting. This includes headers (`#`), bullet point lists (`-`), numbered lists (`1.`), tables and links (`[link](url)`).

  - The input text may contain code blocks. They are either indented or delimited by code fences (triple-backticks). Always preserve code blocks without any modifications. Do not restyle them.
  - The input text may contain inline code (enclosed in single backticks, e.g. "`identifier`"). This often represents proper names, acronyms, or file paths. Preserve inline code without any modifications. Do not remove backticks around inline code.
- Do not add any new Markdown formatting when restyling the text.
  - Do not introduce additional headers, lists (bullet point or numbered), tables, or table rows/columns (but preserve those that were already present in the input text).
  - Don't add text as underlined, bold or italic. Preserve any formatting that was already in the input text, but do not add new Markdown formatting.
- The style of the output text should be obvious, playful and pronounced.
  - The restyled text should feel strongly like {{ what }}.
  - It should be obvious to the reader that the text has been deliberately styled to sound like {{ what }}.
- The output text's structure must closely resemble the input text.
  - The restyling should be largely limited to the selective replacement of words with synonyms that sound more like {{ what }}.
  - You can also add words (like adjectives) that contribute to the desired tone. However, whenever possible, prefer replacing existing words with synonyms, rather than adding extra words.
  - The overall structure of sentences and paragraphs must be preserved. Do not perform major rewrites. Only apply small tweaks to the wording.
  - Do not add, remove, split or join paragraphs. You can only modify existing paragraphs in-place.
  - Do not convert bullet point lists into a separate format. Bullet points must remain bullet points. Do not add or remove bullet points. Only restyle each bullet point in-place.
  - Only add add text (as opposed to changing existing text) when the desired style can't be accomplished otherwise. The restyling must not cause the text to become significantly longer.
  - Keep the output text's length as close to the original input text as possible. That is, add as few additional words/phrases as necessary.

{% include "./language.md" %}

# Step 1: Restyle the text

Restyle the input text by following these rules to make it sound like {{ what }}:
