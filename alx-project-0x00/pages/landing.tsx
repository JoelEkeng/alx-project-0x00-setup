import Card from "@/components/Card"
import Button from "@/components/Button"

const Landing: React.FC =  () => {
    return (
      <div>
        <h1 className=" text-xl font-extralight">Landing Page</h1>
        <Card />
        <Button title="Small Button" styles="size-small rounded-sm" />
        <Button title="Medium Button" styles="size-medium rounded-md" />
        <Button title="Large Button" styles="size-large rounded-full" />
      </div>
    )
  }
  export default Landing