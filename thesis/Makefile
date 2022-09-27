export TEXINPUTS=../tex//:

all: thesis.pdf abstract.pdf

# LaTeX must be run multiple times to get references right
thesis.pdf: thesis.tex $(wildcard *.tex) bibliography.bib thesis.xmpdata
	pdflatex -output-directory=build $<  
	bibtex build/thesis
	pdflatex -output-directory=build $<
	pdflatex -output-directory=build $<

abstract.pdf: abstract.tex abstract.xmpdata
	pdflatex -output-directory=build $< 

clean:
	git clean -f -x build

verify:
	/Applications/verapdf/Applications/verapdf -p UK-7987-version1-custom8.xml build/thesis.pdf