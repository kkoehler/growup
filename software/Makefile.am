## Process this file with automake to produce Makefile.in
## Created by Anjuta

SUBDIRS = src 

python_growupdocdir = ${prefix}/doc/python_growup
python_growupdoc_DATA = \
	README\
	COPYING\
	AUTHORS\
	ChangeLog\
	INSTALL\
	NEWS


EXTRA_DIST = $(python_growupdoc_DATA)


# Remove doc directory on uninstall
uninstall-local:
	-rm -r $(python_growupdocdir)
