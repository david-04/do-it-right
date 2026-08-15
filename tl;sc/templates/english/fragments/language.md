{% if not language %}
{% include "⛔ Variable 'language' is not set" %}
{% endif %}

{% if language === "american-english" %}

- Generate all output using American English spelling. This also applies if the input text uses British English spelling. Your output must always be American English.

{% elif language === "british-english" %}

- Generate all output using British English spelling. This also applies if the input text uses American English spelling. Your output must always be British English.
- When a word can be spelt with `ise` as well as `ize`, spell it with `ise` (for example, use `normalise` instead of `normalize`, and `normalisation` instead of `normalization`).

{% else %}

{% include "⛔ Language is neither 'american-english' nor 'british-english'" %}

{% endif %}
