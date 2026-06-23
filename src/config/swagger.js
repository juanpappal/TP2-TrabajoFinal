import swaggerJSDoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Biblioteca API",
      version: "1.0.0",
      description: "API REST para gestión de libros y usuarios de una biblioteca",
    },
    servers: [
      {
        url: "http://localhost:3000",
        description: "Servidor de desarrollo",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
      schemas: {
        Libro: {
          type: "object",
          properties: {
            id: { type: "integer", example: 1 },
            titulo: { type: "string", example: "Cien años de soledad" },
            autor: { type: "string", example: "Gabriel García Márquez" },
            usuario_id: { type: "integer", nullable: true, example: 2 },
          },
        },
        LibroInput: {
          type: "object",
          required: ["titulo", "autor"],
          properties: {
            titulo: { type: "string", example: "Cien años de soledad" },
            autor: { type: "string", example: "Gabriel García Márquez" },
            usuario_id: { type: "integer", nullable: true, example: 2 },
          },
        },
        Usuario: {
          type: "object",
          properties: {
            id: { type: "integer", example: 1 },
            nombre: { type: "string", example: "Juan Pérez" },
            email: { type: "string", example: "juan@ejemplo.com" },
            rol: { type: "string", example: "usuario" },
          },
        },
        UsuarioInput: {
          type: "object",
          required: ["nombre", "email", "password"],
          properties: {
            nombre: { type: "string", example: "Juan Pérez" },
            email: { type: "string", example: "juan@ejemplo.com" },
            password: { type: "string", example: "123456" },
          },
        },
        LoginInput: {
          type: "object",
          required: ["email", "password"],
          properties: {
            email: { type: "string", example: "juan@ejemplo.com" },
            password: { type: "string", example: "123456" },
          },
        },
        LoginResponse: {
          type: "object",
          properties: {
            mensaje: { type: "string", example: "Login exitoso" },
            token: { type: "string", example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." },
            usuario: {
              $ref: "#/components/schemas/Usuario",
            },
          },
        },
        Error: {
          type: "object",
          properties: {
            message: { type: "string", example: "Recurso no encontrado" },
          },
        },
      },
    },
  },
  apis: ["./src/routes/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
