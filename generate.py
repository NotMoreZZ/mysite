import os

import sass
import yaml
from jinja2 import FileSystemLoader, Template
from jinja2.environment import Environment

templatedir = 'src/templates'
finaldir = os.getcwd() + '/output'

# get data
with open(templatedir+'/techs.yml', 'r') as techsfile:
    techs = yaml.safe_load(techsfile)
with open(templatedir+'/works.yml', 'r') as worksfile:
    works = yaml.safe_load(worksfile)
with open(templatedir+'/contacts.yml', 'r') as contfile:
    contacts = yaml.safe_load(contfile)

# load jinjas
jinjaenv = Environment()
jinjaenv.loader = FileSystemLoader(templatedir)

# html compile
jinja = 'index.html'
template = jinjaenv.get_template(jinja)
html = template.render(techs=techs, works=works, contacts=contacts)
with open('{}/{}'.format(finaldir, jinja), 'w') as page:
    page.write(html)

# scc compile
scssdir = 'src/scss'
cssdir = finaldir + '/css'
sass.compile(dirname=(scssdir, cssdir), output_style='compressed')
