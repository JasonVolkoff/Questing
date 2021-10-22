 // Import your dependecies
    const express = require("express")
    const app = express()
    const cors = require("cors")
    const port = 8000

// Configure your mongoose
    require("./config/mongoose.config")

// Configure your express
    app.use(cors())
    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))

// Attach routes to your express server
    const personRoutes = require("./routes/person.routes")
    personRoutes(app)

// Run your express server
    