FILES_TO_BUNDLE=$(wildcard \
    goetterfunken/american-english/*.md \
    goetterfunken/british-english/*.md \
    talk-like-an-egyptian/american-english/*.md \
    talk-like-an-egyptian/british-english/*.md \
)

default: generated
	node resources/scripts/render.mjs && node resources/scripts/bundle.mjs generated/text-transformations.json $(FILES_TO_BUNDLE)

generated:
	mkdir generated

uplift:
	npm install nunjucks@latest
