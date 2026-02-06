import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Login() {
  return (
    <>
    <div className="flex min-h-svh flex-col items-center justify-center">
    <Card  className="mx-auto w-full max-w-sm">
      
      
      <CardFooter>
        <Button variant="outline" size="sm" className="w-full">
          Action
        </Button>
      </CardFooter>
    </Card>
    </div>
    </>
  )
}
