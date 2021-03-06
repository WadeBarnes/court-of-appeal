let ifNoError = require('./errors.handling');

module.exports = {
    searchFormSevenResponse: (data, response)=> {
        ifNoError(data, response).then(()=> {
            response.json({ parties: data });
        });
    },
    myCasesResponse: (cases, response)=> {
        ifNoError(cases, response).then(()=> {
            response.json({ cases: cases });
        });
    },
    createFormTwoResponse: (id, response)=> {
        ifNoError(id, response).then(()=> {
            response.statusCode = 201;
            response.setHeader('Location', '/forms/' + id );
            response.json({id:parseInt(id)});
        });
    },
    updateFormTwoResponse: (id, response)=> {
        ifNoError(id, response).then(()=> {
            response.setHeader('Location', '/forms/' + id );
            response.json({});
        });
    },
    savePersonResponse: (id, response)=> {
        ifNoError(id, response).then(()=> {
            response.statusCode = 201;
            response.setHeader('Location', '/persons/' + id );
            response.json({});
        });
    },
    personInfoResponse: (person, response)=> {
        ifNoError(person, response).then(()=> {
            response.json(person);
        });
    },
    archiveCasesResponse: (data, response)=> {
        ifNoError(data, response).then(()=> {
            response.json({});
        });
    },
    previewForm2Response: (html, response)=> {
        ifNoError(html, response).then(()=> {
            response.writeHead(200, {'Content-type': 'text/html'});
            response.end(html);
        });
    },
    createJourneyResponse: (id, response)=> {
        ifNoError(id, response).then(()=> {
            response.statusCode = 201;
            response.setHeader('Location', '/journey/' + id );
            response.json({id:parseInt(id)});
        });
    },
    myJourneyResponse: (journey, response)=> {
        ifNoError(journey, response).then(()=> {
            response.json({ journey: journey });
        });
    },
    submitForm2Response: (data, response)=> {
        ifNoError(data, response).then(()=> {
            response.statusCode = 201;
            response.json(data);
        });
    },
    updateSubmissionResponse:  (data, response)=> {
        ifNoError(data, response).then(()=> {
            response.statusCode = 201;
            response.json(data);
        });
    },
    successJsonResponse: (data, response) => {
        response.json(data);
    },
    noContentJsonResponse: (data, response) => {
        response.statusCode = 201;
        response.json(data);  
    },
    notFoundResponse: (response) => {
        response.statusCode = 404;
        response.end();
    },
    logErrorAndServiceUnavailableResponse: (error, response) => {
        console.error(error);
        response.statusCode = 503;
        response.end();
    }
};
