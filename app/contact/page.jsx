export default function Contact() {
  return (
    <main className="app-container">

      <h1 className="text-3xl font-bold mb-8">
        Contact
      </h1>

      <div className="space-y-6 max-w-xl">

        <div>
          <p className="text-sm text-gray-700">Email</p>
          <a href="mailto:katthaint@gmail.com" className="underline">
            katthaint@gmail.com
          </a>
        </div>

        <div>
          <p className="text-sm text-gray-700">LinkedIn</p>
          <a 
            href="https://www.linkedin.com/in/tamara-katthain" 
            target="_blank"
            className="underline"
          >
            www.linkedin.com/in/tamara-katthain
          </a>
        </div>

      </div>

    </main>
  )
}
