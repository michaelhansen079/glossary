package com.mzh.glossarystore.rest;

import com.mzh.glossarystore.model.Glossary;
import com.mzh.glossarystore.repository.GlossaryRepository;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.Info;
import io.swagger.annotations.SwaggerDefinition;

import javax.inject.Inject;
import javax.ws.rs.*;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.UriInfo;
import java.net.URI;
import java.util.List;

import static javax.ws.rs.core.MediaType.APPLICATION_JSON;

@SwaggerDefinition(
        info = @Info(
                title = "Glossary API",
                version = "0.1",
                description = "CRUD API to create glossarys of two languages"
        ),
        host = "localhost:8080",
        basePath = "/glossary/rest"
)
@Path("")
@Api("Glossary")
public class GlossaryEndpoint {

    @Inject
    private GlossaryRepository glossaryRepository;

    @GET
    @Produces(APPLICATION_JSON)
    @ApiOperation("Fetches all glossarys")
    public Response getGlossarys() {
        List<Glossary> glossarys = glossaryRepository.findAll();
        return Response.ok(glossarys).build();
    }

    @POST
    @ApiOperation("Creates a glossary given a JSON Book representation")
    @Produces(APPLICATION_JSON)
    public Response saveGlossary(Glossary glossary, @Context UriInfo uriInfo) {
        Glossary createdGlossary = glossaryRepository.create(glossary);
        URI uri = uriInfo.getBaseUriBuilder().path(createdGlossary.getId().toString()).build();
        return Response.created(uri).build();
    }

    @PUT
    @ApiOperation("Updates an existing glossary given a JSON Book representation")
    @Produces(APPLICATION_JSON)
    public Response updateGlossary(Glossary glossary, @Context UriInfo uriInfo) {
        Glossary updatedGlossary = glossaryRepository.update(glossary);
        return Response.ok(updatedGlossary).build();
    }

    @GET
    @Path("{id : \\d+}")
    @ApiOperation("Fethces a glossary given an id")
    @Produces(APPLICATION_JSON)
    public Response getGlossary(@PathParam("id") Long id) {
        Glossary glossary = glossaryRepository.find(id);
        return Response.ok(glossary).build();
    }

    @GET
    @Path("/count")
    @Produces(APPLICATION_JSON)
    public Response getCount(){
        long count = glossaryRepository.getCount();
        return Response.ok(count).build();
    }

    @DELETE
    @Path("/{id : \\d+}")
    @ApiOperation("Deletes a glossary given an id")
    @Produces(APPLICATION_JSON)
    public Response deleteGlossary(@PathParam("id") Long id) {
        glossaryRepository.delete(id);
        return Response.ok().build();
    }
}
