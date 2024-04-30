import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import Collection from "@/components/shared/Collection";
import { getAllEvents } from "@/lib/actions/event.actions";

export default async function Home() {
  // const events = await getAllEvents({
  //   query: "",
  //   category: "",
  //   page: 1,
  //   limit: 6,
  // });

  // console.log(events);

  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="h1-bold">New Tasks!</h1>
            <p className="p-regular-20 md:p-regular-24">Daily Activities</p>
            <Button size="lg" asChild className="button w-full sm:w-fit">
              <Link href="#events">Check Now</Link>
            </Button>
          </div>
        </div>

        {/* <Collection
          data={events?.data}
          emptyTitle="No Events Found"
          emptyStateSubtext="Come back later"
          collectionType="All_Events"
          limit={6}
          page={1}
          totalPages={2}
        /> */}
      </section>
    </>
  );
}

//new
