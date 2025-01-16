import { Badge } from "@components/badge/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@components/card/card";
import { useUserEvents } from "src/hooks/fetchs/userEvents";

const Projects: React.FC = ({...props}) => {

  const { events, error } = useUserEvents();

  return <div className="flex flex-col space-y-2.5 mt-5">
    { events?.map(
        event =>
          <Card key={event.id}>
            <CardHeader>
              <CardTitle className="flex justify-between">
                <div className="h-max w-auto">
                  <h3 className="text-woodsmoke-50 text-base inline-block">Layer 8 Error</h3>
                  <span className="text-woodsmoke-400 text-base"> &bullet; Blog</span>
                </div>
                <span className="text-woodsmoke-200 text-sm">Jan 4, 2025</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-woodsmoke-200 text-sm">
              Ullamcorper nonummy dolor sanctus no invidunt kasd ipsum sit in facilisi eu dolore dolor duo consetetur. 
            </CardContent>
            <CardFooter className="space-y-0 space-x-2.5">
              <Badge variant="secondary">astro</Badge>
              <Badge>refac</Badge>
              <Badge>styles</Badge>
            </CardFooter>
          </Card>
    )}
  </div>
}

export { Projects }