'use client'

import Header from "@/components/header"
import Footer from "@/components/footer"
import BooksList from "@/components/books-list"

export default function HomePage() {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center">
            <Header />
            <BooksList />
            <Footer />
        </div>
    );
}