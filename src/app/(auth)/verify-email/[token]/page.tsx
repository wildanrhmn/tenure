"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Loader2, CheckCircle2, XCircle } from "lucide-react"

interface VerifyEmailPageProps {
  params: {
    token: string
  }
}

export default function VerifyEmailPage({ params }: VerifyEmailPageProps) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const [isVerified, setIsVerified] = useState(false)

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/verify/${params.token}`)
        const data = await response.json()

        if (!response.ok) {
          throw new Error(data.message || 'Verification failed')
        }

        setIsVerified(true)
        toast.success("Email verified successfully!")
      } catch (error) {
        console.error("Verification error:", error)
        toast.error(error instanceof Error ? error.message : "Verification failed")
      } finally {
        setIsLoading(false)
      }
    }

    verifyEmail()
  }, [params.token])

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-md space-y-8 text-center">
          <Loader2 className="h-12 w-12 animate-spin text-teal-600 mx-auto" />
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Verifying your email</h1>
            <p className="text-gray-600">Please wait while we verify your email address...</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8 text-center">
        {isVerified ? (
          <>
            <div className="space-y-4">
              <CheckCircle2 className="h-16 w-16 text-teal-600 mx-auto" />
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900">Email Verified!</h1>
                <p className="text-gray-600">
                  Your email has been successfully verified. You can now log in to your account.
                </p>
              </div>
            </div>
            <Button asChild className="w-full bg-teal-600 hover:bg-teal-700">
              <Link href="/login">Go to Login</Link>
            </Button>
          </>
        ) : (
          <>
            <div className="space-y-4">
              <XCircle className="h-16 w-16 text-red-600 mx-auto" />
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900">Verification Failed</h1>
                <p className="text-gray-600">
                  The verification link is invalid or has expired.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <Button asChild className="w-full bg-teal-600 hover:bg-teal-700">
                <Link href="/login">Go to Login</Link>
              </Button>
              <Button variant="outline" asChild className="w-full">
                <Link href="/resend-verification">Resend Verification Email</Link>
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  )
} 