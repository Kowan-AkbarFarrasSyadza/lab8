"use client"

import { useState } from "react"
import { useForm } from "@tanstack/react-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

// Validation schema
const formSchema = z.object({
  radius: z
    .number({ message: "Radius must be a number." })
    .positive("Radius must be greater than 0."),
  height: z
    .number({ message: "Height must be a number." })
    .positive("Height must be greater than 0."),
})

export function CylinderLateralSurfaceForm() {
  const [lateralSurface, setLateralSurface] = useState<number | null>(null)
  const [loading, setLoading] = useState(false)

  const form = useForm({
    defaultValues: {
      radius: 0,
      height: 0,
    },
    validators: {
      onSubmit: formSchema,
    },
    onSubmit: async ({ value }) => {
      setLoading(true)
      try {
        const res = await fetch("/api/cylinder-lateral-surface", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            radius: value.radius,
            tinggi: value.height,
          }),
        })

        if (!res.ok) {
          throw new Error(`Request failed with status ${res.status}`)
        }

        const data = await res.json()
        console.log("API response:", data)

        if (!data.luas_selimut_tabung) {
          throw new Error("Response missing 'luas_selimut_tabung'")
        }

        setLateralSurface(data.luas_selimut_tabung)
      } catch (error: any) {
        console.error(error)
        alert("Failed to calculate: " + error.message)
      } finally {
        setLoading(false)
      }
    },
  })

  return (
    <div className="min-h-[calc(100vh-6rem)] flex flex-col items-center py-20 px-6 gap-10">
      <Card className="w-full sm:max-w-md">
        <CardHeader>
          <CardTitle>Cylinder Lateral Surface Calculator</CardTitle>
          <CardDescription>
            Input the radius and height of the cylinder to calculate the lateral surface.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form
            id="form-cylinder-lateral-surface"
            onSubmit={(e) => {
              e.preventDefault()
              form.handleSubmit()
            }}
          >
            <FieldGroup>
              {/* Radius Field */}
              <form.Field
                name="radius"
                children={(field) => {
                  const isInvalid =
                    field.state.meta.isTouched && !field.state.meta.isValid
                  return (
                    <Field data-invalid={isInvalid}>
                      <FieldLabel htmlFor="form-cylinder-radius">
                        Radius
                      </FieldLabel>
                      <Input
                        type="number"
                        id="form-cylinder-radius"
                        name={field.name}
                        value={field.state.value || ""}
                        onBlur={field.handleBlur}
                        onChange={(e) =>
                          field.handleChange(Number(e.target.value))
                        }
                        aria-invalid={isInvalid}
                        placeholder="5"
                        min={0}
                        step="any"
                      />
                      <FieldDescription>
                        The radius must be a positive number.
                      </FieldDescription>
                      {isInvalid && (
                        <FieldError errors={field.state.meta.errors} />
                      )}
                    </Field>
                  )
                }}
              />

              {/* Height Field */}
              <form.Field
                name="height"
                children={(field) => {
                  const isInvalid =
                    field.state.meta.isTouched && !field.state.meta.isValid
                  return (
                    <Field data-invalid={isInvalid}>
                      <FieldLabel htmlFor="form-cylinder-height">
                        Height
                      </FieldLabel>
                      <Input
                        type="number"
                        id="form-cylinder-height"
                        name={field.name}
                        value={field.state.value || ""}
                        onBlur={field.handleBlur}
                        onChange={(e) =>
                          field.handleChange(Number(e.target.value))
                        }
                        aria-invalid={isInvalid}
                        placeholder="10"
                        min={0}
                        step="any"
                      />
                      <FieldDescription>
                        The height must be a positive number.
                      </FieldDescription>
                      {isInvalid && (
                        <FieldError errors={field.state.meta.errors} />
                      )}
                    </Field>
                  )
                }}
              />
            </FieldGroup>
          </form>
        </CardContent>

        <CardFooter>
          <Field orientation="horizontal">
            <Button
              type="button"
              variant="outline"
              onClick={() => {
                form.reset()
                setLateralSurface(null)
              }}
              disabled={loading}
            >
              Reset
            </Button>
            <Button
              type="submit"
              form="form-cylinder-lateral-surface"
              disabled={loading}
            >
              {loading ? "Calculating..." : "Calculate"}
            </Button>
          </Field>
        </CardFooter>
      </Card>

      {lateralSurface !== null && (
        <Card className="w-full sm:max-w-md">
          <CardContent>
            The cylinder lateral surface area is{" "}
            <strong>{lateralSurface.toFixed(2)}</strong>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

export default CylinderLateralSurfaceForm
