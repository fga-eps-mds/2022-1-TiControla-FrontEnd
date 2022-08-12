FROM python:3.10.5

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

RUN apt-get update

COPY requirements.txt requirements.txt
RUN python -m pip install --upgrade pip
RUN pip install --no-cache-dir -r requirements.txt

COPY . /api_src

WORKDIR /api_src

EXPOSE 8080
CMD ["sh -c 'python manage.py flush --no-input && python manage.py makemigrations user_data && python manage.py migrate && ./manage.py createsuperuser --no-input --username=root --email=leonardomichalskim@gmail.com && python manage.py runserver 0.0.0.0:8080'"]
# RUN python manage.py migrate
# CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
