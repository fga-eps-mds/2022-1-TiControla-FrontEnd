FROM python:3.10.5

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

RUN apt-get update && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

COPY requirements.txt requirements.txt
RUN python -m pip install --no-cache-dir pip==22.2.2
RUN pip install --no-cache-dir -r requirements.txt

WORKDIR /api_src
COPY . .

RUN chmod +x ./start.sh
CMD ["./start.sh"]
