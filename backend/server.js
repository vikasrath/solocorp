import express from "express";
import dotenv from "dotenv"
import path from "path";
import connectToMongoDB from "./db/connectToMongoDB.js";
import { page } from "./controllers/pages.controller.js";
import Page from "./model/page.model.js";

dotenv.config()

const app = express()
const Port = process.env.PORT;
const __dirname = path.resolve();

app.use(express.static(path.join(__dirname, "frontend/dist")));
app.use(express.json());

app.get("/api/data/:page", page);
app.get("/api/sample-page", async (req, res) => {
    try {
        // Create a sample page object
        const samplePage = new Page({
            name: "proprietorship",
            data: {
                heroContent: {
                    title: "Proprietorship Registration",
                    description: [
                        "Register your proprietorship business with ease.",
                        "Compliant and quick service at your fingertips.",
                    ],
                },
                title: "Proprietorship Registration",
                sections: [
                    {
                        type: "overview",
                        content: {
                            introduction:
                                "Proprietorship registration is ideal for small businesses and sole owners.",
                            details: [
                                "Easiest and quickest form of business registration.",
                                "Low compliance requirements and simple tax filings.",
                            ],
                        },
                    },
                    {
                        type: "benefits",
                        content: {
                            heading: "Benefits of Proprietorship Registration",
                            items: [
                                {
                                    title: "Ease of Setup",
                                    description:
                                        "Minimal paperwork and simple process make it ideal for sole entrepreneurs.",
                                },
                                {
                                    title: "Full Control",
                                    description:
                                        "The proprietor has complete control over business operations and profits.",
                                },
                            ],
                        },
                    },
                ],
            },
        });

        // Save the sample page to the database (optional, for testing purposes)
        await samplePage.save();

        // Send the sample data as the response
        res.status(200).json(samplePage);
    } catch (error) {
        console.error("Error creating sample page:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});


app.get("*", (req, res)=> {
    res.sendFile(path.resolve(__dirname,"frontend", "dist", "index.html"))
})

app.listen(Port, ()=> {
    console.log(`Server is working on port ${Port}`);
    connectToMongoDB()
})