import Image from 'next/image'
import Link from 'next/link'

export default function Signup() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        <div className="w-full md:w-1/2">
          <Image
            src="/assets/beatsnoop.png?height=400&width=400&text=Signup%20Image"
            alt="Sign Up"
            width={550}
            height={550}
            className="rounded-lg"
          />
        </div>
        <div className="w-full md:w-1/2 max-w-md">
          <h1 className="text-3xl font-bold mb-6">Create an account</h1>
          <p className="mb-6">Enter your details below</p>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full border rounded-md px-3 py-2"
              required
            />
            <input
              type="email"
              placeholder="Email or Phone Number"
              className="w-full border rounded-md px-3 py-2"
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full border rounded-md px-3 py-2"
              required
            />
            <button type="submit" className="w-full px-6 py-2 bg-red-500 text-white rounded-md">
              Create Account
            </button>
          </form>
          <div className="mt-4 text-center">
            <button className="px-6 py-2 border rounded-md w-full">
              Sign up with Google
            </button>
          </div>
          <p className="mt-4 text-center">
            Already have an account?{' '}
            <Link href="/login" className="text-red-500">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

