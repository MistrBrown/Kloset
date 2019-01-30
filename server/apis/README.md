# Steps to run Swagger:
1. Download Docker
2. run `docker pull swaggerapi/swagger-ui`
3. cd into kloset and find apis folder, located under `kloset/apis`
4. run `docker run -p 80:8080 -e SWAGGER_JSON=<kloset_folder>/server/apis/apis.json -v <kloset_folder>/server/apis/apis.json:<kloset_folder>/server/apis/apis.json swaggerapi/swagger-ui`
