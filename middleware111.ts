import morgan from "morgan"
import { NextRequest, NextResponse, userAgent } from 'next/server'
import fs from "fs"
import path from "path"
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })

var logger = morgan("dev", { stream: accessLogStream })
export function middleware(req: NextRequest) {
    const { device } = userAgent(req)

    if (device.type === "mobile" || device.type === "tablet" || device.type === "wearable") {
        // console.log("heremobile");
        return NextResponse.redirect("https://google.vn")
    }
    // console.log("herewin");
    logger(req, NextResponse, NextResponse.next)
}
