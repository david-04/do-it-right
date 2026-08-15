{% if not language %}
{% include "⛔ Variable 'language' is not set" %}
{% endif %}

{% if not TheOutputText %}
{% include "⛔ Variable 'TheOutputText' is not set" %}
{% endif %}

{% if language === "american-english" %}

- {{ TheOutputText }} must use American English spelling only. {% if transformsInputText %} Treat every word with British English spelling as a typo and replace it with its American English equivalent.{% endif %}

{% elif language === "british-english" %}

- {{ TheOutputText }} text must use British English spelling only.
  - {% if transformsInputText %} Treat every word with American English spelling as a typo, and replace it with its British English equivalent.{% endif %}
  - When a word can be spelt with `ise` as well as `ize`, spell it with `ise` (for example, use `normalise` instead of `normalize`, and `normalisation` instead of `normalization`).

{% else %}

{% include "⛔ Language is neither 'american-english' nor 'british-english'" %}

{% endif %}
