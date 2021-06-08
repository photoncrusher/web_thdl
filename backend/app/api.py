from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from elasticsearch import Elasticsearch
app = FastAPI()

origins = [
    "http://localhost:3000",
    "localhost:3000"
]

app.add_middleware(
        CORSMiddleware,
        allow_origins=origins,
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"]
)
search_features = []
info_feat = []

ELASTICSEARCH_URL = "https://elastic:5Wo9HJdtJWqyDtyqZjjWv7Mj@i-o-optimized-deployment-18cacb.es.us-west1.gcp.cloud.es.io:9243/"
@app.get("/search", tags=["products"])
async def get_products() -> dict:
    es = Elasticsearch(ELASTICSEARCH_URL)
    body =  {'query': 
                {'bool': 
                    {'must': 
                        search_features
                    }}
            }
    res = es.search(index='stores', body=body,size =10)
    products = []    
    for doc in res['hits']['hits']:
        products.append(doc['_source'])
    print(search_features)
    return { "data": products}



@app.post("/search", tags=["products"])
async def add_search_features(search_feature: list) -> dict:
    global search_features
    search_features = search_feature
    pop_list = []
    for i in range(0,len(search_features)):
        for val in search_features[i]['match'].values():
            if val == '':
                pop_list.append(i)
    for i in sorted(pop_list, reverse=True):
        del search_features[i]
    return {
        "data": { "search_features added." }
    }

@app.post("/info", tags=["products"])
async def add_info_features(info: list) -> dict:
    global info_feat
    info_feat = info
    return {
        "data": { "search_features added." }
    }

@app.get("/info")
async def get_products() -> dict:
    es = Elasticsearch(ELASTICSEARCH_URL)
    body =  {'query': 
                {'bool': 
                    {'must': 
                        info_feat
                    }}
            }
    res = es.search(index='apple', body=body,size =100)
    products = []    
    for doc in res['hits']['hits']:
        products.append(doc['_source'])
    return { "data": products}

@app.get("/ex")
async def get_products() -> dict:
    es = Elasticsearch(ELASTICSEARCH_URL)
    body =  {'query': 
                {'bool': 
                    {'must': 
                        info_feat
                    }}
            }
    res = es.search(index='apple', body=body,size =1)
    products = []    
    for doc in res['hits']['hits']:
        products.append(doc['_source'])
    return { "data": products}