import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Calendar,
  Clock,
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5 text-[#0A2C55]" />,
      label: "Email",
      value: "svardan41@gmail.com",
      action: "mailto:svardan41@gmail.com",
    },
    {
      icon: <Phone className="w-5 h-5 text-[#0A2C55]" />,
      label: "Phone",
      value: "+91 9958128267",
      action: "tel:+919958128267",
    },
    {
      icon: <MapPin className="w-5 h-5 text-[#0A2C55]" />,
      label: "Location",
      value: "Delhi, India",
      action: null,
    },
  ];

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5 text-[#0A2C55]" />,
      label: "GitHub",
      username: "@MarezKwiup",
      url: "https://github.com/MarezKwiup",
    },
    {
      icon: <Linkedin className="w-5 h-5 text-[#0A2C55]" />,
      label: "LinkedIn",
      username: "/in/vardan-sharma-144a19304/",
      url: "https://www.linkedin.com/in/vardan-sharma-144a19304/",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-[#F9FAFB]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className=" mt-10 text-4xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-lg max-w-2xl mx-auto text-[#68727E]">
            I'm always interested in new opportunities and exciting projects.
            Let's discuss how we can bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="">
            <CardHeader>
              <CardTitle className="text-2xl">Send me a message</CardTitle>
              <p className="text-[#68727E]">
                Fill out the form below and I'll get back to you within 24
                hours.
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium space-y-4">
                    First Name
                  </label>
                  <Input className="mt-2" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium mb-5">Last Name</label>
                  <Input className="mt-2" placeholder="Doe" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <Input className='mt-2' type="email" placeholder="john.doe@example.com" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Subject</label>
                <Input className='mt-2' placeholder="Project Discussion" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <Textarea
                 className='mt-2'
                  placeholder="Tell me about your project..."
                  rows={5}
                />
              </div>

            

              <Button className="w-full bg-[#0A2C56] text-white hover:bg-[#264166] py-3">Send Message</Button>

              <div className="flex items-center gap-2 text-sm">
                <Clock className="w-4 h-4" />
                <span>Typically responds within 2-4 hours</span>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Direct Contact */}
            <Card className="">
              <CardHeader>
                <CardTitle className="text-xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="flex hover:bg-[#F9FAFB] items-center gap-4 p-3 rounded-lg transition-colors"
                  >
                    <div className="bg-[#E7F1FC] w-10 h-10 rounded-lg flex items-center justify-center">
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <div className="text-sm">{info.label}</div>
                      {info.action ? (
                        <a
                          href={info.action}
                          className="font-medium transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <div className="font-medium">{info.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="">
              <CardHeader>
                <CardTitle className="text-xl">Connect with me</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="flex hover:bg-[#F9FAFB] items-center gap-4 p-3  rounded-lg transition-colors group"
                  >
                    <div className="w-10 h-10 bg-[#E7F1FC] rounded-lg flex items-center justify-center group-hover:text-white transition-colors">
                      {social.icon}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium">{social.label}</div>
                      <div className="text-sm">{social.username}</div>
                    </div>
                  </a>
                ))}
              </CardContent>
            </Card>

            <Card className="">
              <CardContent className="space-y-4">
                <a href='https://github.com/MarezKwiup/Portfolio-new' target="_blank" rel="noopener noreferrer" className="block w-full p-2 border-0 rounded-md items-center bg-[#0A2C56] text-white hover:bg-[#264166] py-3">Code for this portfolio</a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
