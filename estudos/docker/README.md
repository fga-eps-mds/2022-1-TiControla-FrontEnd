## Example on how to build and use a docker image


### Folders and files
- **LICENSE**: this is the license of everything in this folder (2022-1-TiControla/estudos/docker).
- **docker**: folder where the files about the docker image should be located.
  - **Dockerfile**: instructions used to build the docker image.
  - **requirements.txt**: Python libraries installed in the docker image.

### How to build the docker image
##### Make sure that you've installed docker before running the following command. 
```
cd estudos/docker
docker build -t leommiranda/tesserocr docker
```

### How to run Jupyter Lab

```
docker run --rm -p 8888:8888 -e JUPYTER_ENABLE_LAB=yes -v ${PWD}:/current_dir -w /current_dir leommiranda/tesserocr
# Open one of the 3 server links that will appear in the terminal. I usually go with the last one.
```

### How to run a Python script

```
docker run --rm -v ${PWD}:/current_dir -w /current_dir leommiranda/tesserocr python [SCRIPT_NAME].py
```

### How to run multiple Python scripts

```
docker run -it --rm -v ${PWD}:/current_dir -w /current_dir leommiranda/tesserocr bash
python [SCRIPT_NAME_1].py
python [SCRIPT_NAME_2].py
(...)
```


### Main ready-to-use libraries
##### Not Python

```
tesseract-ocr (english support pre-installed)
tesseract-ocr-por (portuguese support)
```

##### Python
```
pytesseract
tesserocr
pdf2image

Pillow
opencv-contrib-python

numpy
pandas
pyarrow
```

#### (☞ﾟヮﾟ)☞

