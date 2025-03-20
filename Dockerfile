FROM node

RUN apt update
# RUN apt install software-properties-common -y

# RUN add-apt-repository ppa:deadsnakes/ppa
RUN ln -s /usr/bin/python3 /usr/bin/python

RUN apt install -y python3-pip
RUN apt install -y python3-pandas
