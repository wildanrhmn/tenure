"use client"

import React from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useForm, type SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail } from "lucide-react"
import { resendVerificationSchema, type ResendVerificationFormData } from "@/lib/validations/auth"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { ControllerRenderProps } from "react-hook-form"

export default function ResendVerificationPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = React.useState(false)

  const form = useForm<ResendVerificationFormData>({
    resolver: zodResolver(resendVerificationSchema) as any,
    defaultValues: {
      email: "",
    },
  })

  const onSubmit: SubmitHandler<ResendVerificationFormData> = async (data) => {
    setIsLoading(true)

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/resend-verification`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: data.email }),
      })

      const responseData = await response.json()

      if (!response.ok) {
        throw new Error(responseData.message || 'Failed to resend verification email')
      }

      toast.success("Verification email sent successfully! Please check your inbox.")
      router.push("/login")
    } catch (error) {
      console.error("Resend verification error:", error)
      toast.error(error instanceof Error ? error.message : "Failed to resend verification email")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">Resend Verification Email</h1>
          <p className="text-gray-600">
            Enter your email address to receive a new verification link.
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control as any}
              name="email"
              render={({ field }: { field: ControllerRenderProps<ResendVerificationFormData, "email"> }) => (
                <FormItem className="space-y-2">
                  <FormLabel>Email address</FormLabel>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                      <Mail size={18} />
                    </div>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="name@example.com"
                        className="pl-10"
                        {...field}
                      />
                    </FormControl>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700" disabled={isLoading}>
              {isLoading ? "Sending..." : "Resend Verification Email"}
            </Button>
          </form>
        </Form>

        <div className="text-center">
          <p className="text-sm text-gray-600">
            Remember your password?{" "}
            <Link href="/login" className="font-medium text-teal-600 hover:text-teal-500">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
} 