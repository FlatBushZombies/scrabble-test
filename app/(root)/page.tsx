import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import WordRotate from "@/components/ui/word-rotate"
import {
  Home,
  Settings,
  CreditCard,
  BarChart2,
  Search,
  TrendingUp,
  DollarSign,
  CreditCardIcon as PaymentIcon,
  Star,
  ArrowUpRight,
  Users,
} from "lucide-react"
import Features from "@/components/Features"

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <Image src='/assets/logo.png' alt="logo" width={40} height={40} className="object-cover" />
          <span className="font-bold text-xl">Scrabble</span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#" className="text-sm font-medium flex items-center gap-1">
            <Settings className="w-4 h-4" />
            Solutions
          </Link>
          <Link href="#" className="text-sm font-medium flex items-center gap-1">
            <CreditCard className="w-4 h-4" />
            Pricing
          </Link>
          <Link href="#" className="text-sm font-medium flex items-center gap-1">
            <BarChart2 className="w-4 h-4" />
            Entreprises
          </Link>
        </nav>
        <Button className="bg-primary hover:bg-[#daf149] text-black">
          Sign In
          <svg
            className="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14m-7-7 7 7-7 7" />
          </svg>
        </Button>
      </header>

      {/* Hero Section */}
      <main className="px-4 py-12 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl font-bold leading-tight">
              Discover,  
              <br />
              Create,
              <br />
              Collaborate
            </h1>
            <p className="text-gray-600 max-w-md">
            Make data-driven decisions to maximize productivity.
            Scrabble offers detailed, real-time insights into the performance, cost, and efficiency of every tool on the market
            </p>
            <Button className="bg-primary hover:bg-[#daf149] text-black">
              Create Account
              <svg
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14m-7-7 7 7-7 7" />
              </svg>
            </Button>
            <div className="flex items-center gap-4 pt-8">
              <div className="flex -space-x-2">
                <Avatar className="border-2 border-white">
                  <AvatarImage src="/assets/profiles/alicia-barker.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Avatar className="border-2 border-white">
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback>HN</AvatarFallback>
                </Avatar>
                <Avatar className="border-2 border-white">
                  <AvatarImage src="/assets/profiles/mark-erixon.png" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
              </div>
              <div>
                <div className="font-bold">15 Million+    
                    <WordRotate
                          className='text-[14px] justify-center'
                          words={["Creators", "Researchers", "Educators", "Students", 'Leaders']}
                    />
                    </div>
                <div className="text-sm text-gray-600">Using the power of real-time analytics</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/assets/screen.jpg"
              alt="Banking app interface showing balance and transactions"
              width={600}
              height={600}
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <Card className="p-6">
            <h3 className="font-semibold mb-4">Connect Easily</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback>SN</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">Savannah Nguyen</div>
                    <div className="text-sm text-gray-600">Havard Philosophy Professor</div>
                  </div>
                </div>
                <Button variant="ghost" size="icon">
                  +
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback>BS</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">Brooklyn Simmons</div>
                    <div className="text-sm text-gray-600">Mr Beast Creative Director</div>
                  </div>
                </div>
                <Button variant="ghost" size="icon">
                  +
                </Button>
              </div>
            </div>
          </Card>

          <Card className="p-6 relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="font-semibold mb-2">Discover Tools!</h3>
              <div className="absolute top-4 right-4">
                <div className="bg-primary text-black text-sm px-3 py-1 rounded-full">Try now</div>
              </div>
              <p className="mt-6">Find the perfect digital tools for your business needs in seconds.</p>
            </div>
          </Card>

          <Card className="p-6 relative overflow-hidden">
            <div className="relative z-10">
              <div className="bg-red-100 text-red-600 text-sm px-3 py-1 rounded-full inline-block mb-2">
                Try this now
              </div>
              <h3 className="font-semibold text-lg mb-2">Build Communitites</h3>
              <div className="text-sm text-gray-600">Trusted by 50,000+ users</div>
            </div>
            <div className="absolute -bottom-4 -right-4">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center">
                <span className="text-2xl"><Users /></span>
              </div>
            </div>
          </Card>
        </div>

        {/* New Platform Categories Section */}
        <section className="px-4 py-16 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Explore Our Platform Categories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover specialized tools and solutions designed for different aspects of your business
            </p>
          </div>

          <Tabs defaultValue="research" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 lg:flex lg:justify-center gap-2 h-auto p-1">
              <TabsTrigger value="research" className="flex items-center gap-2 px-6">
                <Search className="w-4 h-4" />
                Research
              </TabsTrigger>
              <TabsTrigger value="marketing" className="flex items-center gap-2 px-6">
                <TrendingUp className="w-4 h-4" />
                Marketing
              </TabsTrigger>
              <TabsTrigger value="finance" className="flex items-center gap-2 px-6">
                <DollarSign className="w-4 h-4" />
                Finance
              </TabsTrigger>
              <TabsTrigger value="payment" className="flex items-center gap-2 px-6">
                <PaymentIcon className="w-4 h-4" />
                Payment
              </TabsTrigger>
            </TabsList>

            <TabsContent value="research" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <PlatformCard
                  title="Market Analysis Pro"
                  description="Advanced market research and competitor analysis platform"
                  rating={4.9}
                  reviews={2390}
                  badge="Popular"
                  imageSrc="/assets/icons/brands/accusoft.svg"
                />
                <PlatformCard
                  title="DataViz Explorer"
                  description="Interactive data visualization and research insights"
                  rating={4.7}
                  reviews={1850}
                  badge="New"
                  imageSrc="/assets/icons/brands/amazon.svg"
                />
                <PlatformCard
                  title="Survey Master"
                  description="Comprehensive survey and feedback management system"
                  rating={4.8}
                  reviews={3120}
                  imageSrc="/assets/icons/brands/apple-pay.svg"
                />
              </div>
            </TabsContent>

            <TabsContent value="marketing" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <PlatformCard
                  title="Campaign Manager"
                  description="All-in-one marketing campaign management solution"
                  rating={4.8}
                  reviews={4250}
                  badge="Best Seller"
                  imageSrc="assets/icons/brands/behance.svg"
                />
                <PlatformCard
                  title="Social Hub"
                  description="Unified social media management and analytics"
                  rating={4.6}
                  reviews={1920}
                  imageSrc="assets/icons/brands/bitcoin.svg"
                />
                <PlatformCard
                  title="Content Studio"
                  description="Professional content creation and distribution platform"
                  rating={4.7}
                  reviews={2840}
                  badge="Trending"
                  imageSrc="assets/icons/brands/chrome.svg"
                />
              </div>
            </TabsContent>

            <TabsContent value="finance" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <PlatformCard
                  title="Budget Master"
                  description="Smart budgeting and financial planning tools"
                  rating={4.9}
                  reviews={5630}
                  badge="Top Rated"
                  imageSrc="assets/icons/brands/cpanel.svg"
                />
                <PlatformCard
                  title="Investment Pro"
                  description="Advanced investment portfolio management"
                  rating={4.8}
                  reviews={3420}
                  imageSrc="assets/icons/brands/deploydog.svg"
                />
                <PlatformCard
                  title="Tax Navigator"
                  description="Simplified tax management and compliance"
                  rating={4.7}
                  reviews={2180}
                  badge="Essential"
                  imageSrc="/assets/icons/brands/gofore.svg"
                />
              </div>
            </TabsContent>

            <TabsContent value="payment" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <PlatformCard
                  title="PayFlow"
                  description="Streamlined payment processing solution"
                  rating={4.9}
                  reviews={6740}
                  badge="Most Popular"
                  imageSrc="/assets/icons/brands/grav.svg"
                />
                <PlatformCard
                  title="Invoice Master"
                  description="Automated invoicing and payment collection"
                  rating={4.8}
                  reviews={3920}
                  imageSrc="/assets/icons/brands/hornbill.svg"
                />
                <PlatformCard
                  title="Subscription Hub"
                  description="Recurring payment and subscription management"
                  rating={4.7}
                  reviews={2560}
                  badge="Featured"
                  imageSrc="/assets/icons/brands/intercom.svg"
                />
              </div>
            </TabsContent>
          </Tabs>
          <Features />
        </section>
      </main>
    </div>
  )
}

// Platform Card Component
function PlatformCard({
  title,
  description,
  rating,
  reviews,
  badge,
  imageSrc,
}: {
  title: string
  description: string
  rating: number
  reviews: number
  badge?: string
  imageSrc: string
}) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="relative">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={title}
          width={200}
          height={100}
          className="object-cover justify-center"
        />
        {badge && <Badge className="absolute top-4 right-4 bg-primary text-black hover:bg-[#daf149]">{badge}</Badge>}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            <span className="font-medium">{rating}</span>
            <span className="text-gray-600">({reviews.toLocaleString()} reviews)</span>
          </div>
          <Button variant="ghost" size="sm" className="hover:bg-[#e8fb5a] hover:text-black">
            Learn More
            <ArrowUpRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </Card>
  )
}

