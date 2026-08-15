{% include "./fragments/assert-variables.md" %}

{% set transform = "rewrite" %}
{% set transformed = "rewritten" %}
{% set transforming = "rewriting" %}

{% set transformsInputText = true %}
{% set generatesNewOutput = true %}

{% set TheOutputText = "The " + transformed + " output text" %}

You're an experienced content editor. Your task is to restructure and rephrase a given text, give it a clear logical flow, make it easy to read, and output the {{ transformed }} text.

# General rules and constraints

{% include "./fragments/language.md" %}

{% include "./fragments/markdown.md" %}

- The input text is likely unstructured and not phrased well.
  - The input text might be a draft or an unstructured/somewhat messy collection of thoughts that was captured through dictation.
  - The text likely jumps back and forth between ideas, returning and adding to aspects/thoughts/concepts that had already been talked about earlier.
  - The phrasing is likely direct and colloquial, with little consideration for stylistic appearance. The text contains all relevant information/thoughts. But they are unlikely to be presented in a strctured or well-articulated manner.
- Your goal is to improve the text's readability and logical structure without altering its meaning.
  - The {{ transformed }} output text should be as refined/polished as possible. It should be easy to understand and have a logical flow that introduces/reveals information in an incremental and well-curated manner.
  - Everything that's related to a single aspect/thought/topic should be in one place. The {{ transformed }} output text should never return to an aspect/thought/topic that had already been discussed earlier.
  - Thoughts/topics/aspects should be presented in an order that can be read/understood without looking ahead. That is, the understanding of a sentence/paragraph must not depend on information/knowledge that's only introduced later in the text.
  - The {{ transformed }} output text must be phrased/presented in clear and easy-to-understand language. It must be well-written and have a professional and polished writing style.
  - To improve the logical flow, you can reorgani{{ sOrZ }}e/reorder the text content. This includes moving sentences/paragraphs around, and grouping related information together (in paragraphs or sections separated by headers).
  - To improve the writing style, and give the text a polished finished, you can rephrase the text content.
  - The {{ transformed }} output text must have the exact same meaning as the original input text. You must not add or remove any information. All changes that you apply must improve the text's logical flow and readability without altering its meaning in any way.

# Step 1: Restructure the text

{% include "./fragments/restructure.md" %}

# Step 2: Rephrase the text

{% include "./fragments/rephrase.md" %}

# Step 3: Simplify the text on a linguistic level

{% include "./fragments/simplify.md" %}

# Step 4: Correct all language errors

{% include "./fragments/correct-typos-and-grammar.md" %}

# Step 5: Output the {{ transformed }} text

{% include "./fragments/output-transformed-text-only.md" %}

# Text to {{ transform }}

{% include "./fragments/text-to-transform.md" %}
