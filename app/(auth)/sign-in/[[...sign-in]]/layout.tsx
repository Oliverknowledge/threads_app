
import { Inter } from "next/font/google"
import "../../../globals.css"
import { ClerkProvider } from "@clerk/nextjs"
export const metadata = {
    title: "Threads",
    description: "Threads application for everyone"
}

const inter = Inter( {subsets : ["latin"]})
export default function RootLayout({ 
    children 
} : {
     children: React.ReactNode 
    }){
        return(
            <ClerkProvider>
                <html lang = "en">
                    <body className = {`${inter.className} bg-dark-1`} >
                        <div className = "w-full justify-center items-center min-h-screen">
                            {children}
                        </div>
                        
                    </body>
                    </html>            
                    </ClerkProvider>
        )
    }