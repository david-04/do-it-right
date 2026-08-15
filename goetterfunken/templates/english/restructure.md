{% include "./fragments/assert-variables.md" %}

{% set transform = "restructure" %}
{% set transformed = "restructured" %}
{% set transforming = "restructuring" %}

{% set transformsInputText = true %}
{% set generatesNewOutput = true %}

{% set TheOutputText = "The " + transformed + " output text" %}

You're an experienced content editor. Your task is to {{ transform }} a given text, regroup/reorder the content to give it a clear logical flow, apply small linguistic tweaks to make it easier to read, and output the {{ transformed }} text.

# General rules and constraints

{% include "./fragments/language.md" %}

{% include "./fragments/markdown.md" %}

- Your goal is to improve the text's readability and logical structure without altering its meaning.
  - The {{ transformed }} output text should be as refined/polished as possible. It should be easy to understand and have a logical flow that introduces/reveals information in an incremental and well-curated manner.
  - Everything that's related to a single aspect/thought/topic should be in one place. The {{ transformed }} output text should never return to an aspect/thought/topic that had already been discussed earlier.
  - Thoughts/topics/aspects should be presented in an order that can be read/understood without looking ahead. That is, the understanding of a sentence/paragraph must not depend on information/knowledge that's only introduced later in the text.
  - To improve the logical flow, you can reorgani{{ sOrZ }}e/reorder the text content and apply linguistic tweaks (like rephrasing or splitting/merging sentences).
  - The {{ transformed }} output text must have the exact same meaning as the original input text. You must not add or remove any information. All changes that you apply must improve the text's readability without altering its meaning.

# Step 1: Restructure the text

{% include "./fragments/restructure.md" %}

# Step 2: Simplify the text on a linguistic level

{% include "./fragments/simplify.md" %}

# Step 3: Correct all language errors

{% include "./fragments/correct-typos-and-grammar.md" %}

# Step 4: Output the {{ transformed }} text

{% include "./fragments/output-transformed-text-only.md" %}

# Text to {{ transform }}

{% include "./fragments/text-to-transform.md" %}
