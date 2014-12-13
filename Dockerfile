FROM    centos:centos6

# Install Node.js and npm
RUN     rpm -Uvh http://download.fedoraproject.org/pub/epel/6/i386/epel-release-6-8.noarch.rpm
RUN     yum install -y npm

# Bundle app source
COPY *.json *.js /app/

RUN cd /app; npm install

# Set the working directory
WORKDIR /app

CMD [ "node", "index.js" ]
