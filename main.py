from google.appengine.ext import webapp 
from google.appengine.ext.webapp.util import run_wsgi_app

class IndexHandler(webapp.RequestHandler): 
    def get(self): 
        if self.request.url.endswith('/'): 
            path = '%sindex.html'%self.request.url

        self.redirect(path)

    def post(self): 
        self.get()

application = webapp.WSGIApplication([('/.*', IndexHandler)], debug=True)

def main(): 
    run_wsgi_app(application)

if __name__ == "__main__": 
    main()