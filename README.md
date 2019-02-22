# Glossaries
A simple CRUD (CreateReadUpdateDelete) application using bosnian / english glossaries.
Project uses a Java EE 7 backend, tested on Wildfly 15, generated from a Maven archetype.
Java backend is currently dependent on an external datasource "GlossariesDS" specified in persistence.xml.
To deploy the java backend to application server; run "mvn install"

Frontend is Angular 7. To start the frontend run "ng serve -o"

Project is currently only tested in development using IntelliJ IDE.

Next step is to be able to run the project using Docker containers.