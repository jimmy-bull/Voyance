"use client";
import { useState, useEffect, useRef } from "react";
import { PhoneCall, Mails, Plus, Check, Star, Stars } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useInView } from "framer-motion";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import "animate.css/animate.compat.css";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css";
import { motion } from "framer-motion";
import axios from "axios";
export default function Home() {
  const [links, set_links] = useState([
    {
      text: "Cabinet de voyance",
      link: "#cabinet_voyance",
      color: "#fff",
    },
    {
      text: "Biographie",
      link: "#bio",
      color: "#fff",
    },
    {
      text: "Mes services et rituels",
      link: "#services",
      color: "#fff",
    },
    {
      text: "Les témoignages",
      link: "#temoignage",
      color: "#fff",
    },
    {
      text: "Contact",
      link: "#contact",
      color: "#fff",
    },
  ]);

  const change_color = (key: number) => {
    set_links((prev) =>
      prev.map((data, index) =>
        key === index
          ? { ...data, color: "#ef4444" }
          : { ...data, color: "#FFF" }
      )
    );
  };

  useEffect(() => {
    const hash = window.location.hash;
    set_links((prev) => {
      return prev.map((data, key) => {
        if (hash === data.link) {
          return { ...data, color: "#ef4444" };
        } else {
          return { ...data, color: "#FFF" };
        }
      });
    });
  }, []);

  const ref_cabinet_voyance = useRef(null);
  const isInView_ref_cabinet_voyance = useInView(ref_cabinet_voyance);

  const ref_bio = useRef(null);
  const isInView_ref_bio = useInView(ref_bio);

  const ref_services = useRef(null);
  const isInView_ref_services = useInView(ref_services);

  const ref_temoin = useRef(null);
  const isInView_ref_temoin = useInView(ref_temoin);

  const ref_contact = useRef(null);
  const isInView_ref_contact = useInView(ref_contact);

  useEffect(() => {
    if (isInView_ref_cabinet_voyance) {
      change_color(0);
    }
    if (isInView_ref_bio) {
      change_color(1);
    }
    if (isInView_ref_services) {
      change_color(2);
    }

    if (isInView_ref_temoin) {
      change_color(3);
    }
    if (isInView_ref_contact) {
      change_color(4);
    }
  }, [
    isInView_ref_cabinet_voyance,
    isInView_ref_bio,
    isInView_ref_services,
    isInView_ref_temoin,
    isInView_ref_contact,
  ]);

  const sendMessage = async () => {
    axios({
      method: "POST",
      url: "https://backendserver.iwalink.com/api/sendvoyancemessage",
      headers: {
        "Content-Type": "application/json",
        //  Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        alert(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    sendMessage();
  }, []);
  return (
    <>
      <div className="fixed w-full  z-[100000000] ">
        <div className="bg-red-500 py-5 relative flex justify-center items-center text-white gap-5 flex-wrap  ">
          <div className="flex gap-2 items-center">
            <PhoneCall
              className="h-7 w-7 cursor-pointer text-white"
              aria-hidden="true"
            />
            <span className="sm:text-sm text-xs">+33 773072938 </span>
          </div>
          <div className="flex gap-2 items-center">
            <Mails
              className="h-7 w-7 cursor-pointer text-white sm:text-sm text-xs"
              aria-hidden="true"
            />
            <span className="sm:text-sm text-xs">bafodesakho255@gmail.com</span>
          </div>
        </div>
        <div className="w-full justify-center md:flex hidden relative z-[1000000]">
          <div className="flex   justify-evenly shadow-xl w-[100%]  py-3 items-center bg-black ">
            {links.map((data, key) => {
              return (
                <Link
                  key={key}
                  href={data.link}
                  // className="text-white uppercase	text-sm"
                >
                  <motion.button
                    onClick={() => change_color(key)}
                    initial={{ color: data.color }}
                    animate={{ color: data.color }}
                    whileHover={{ scale: 1.1 }}
                    transition={{
                      color: { duration: 1 },
                      scale: { duration: 0.5 },
                    }}
                  >
                    {data.text}
                  </motion.button>
                </Link>
              );
            })}

            {/* <Link href={"#bio"} className="text-white uppercase	text-sm">
              Biographie
            </Link>
            <Link href={"#services"} className="text-white uppercase	text-sm">
              Mes services et rituels
            </Link>
            <Link href={"#temoignage"} className="text-white uppercase	text-sm">
              Les témoignages
            </Link>
            <Link href={"#contact"} className="text-white uppercase	text-sm">
              Contact
            </Link> */}
          </div>
        </div>
      </div>

      <div
        id="cabinet_voyance"
        ref={ref_cabinet_voyance}
        className="bg-[url('/bg.png')]  bg-cover	bg-opacity-25 xl:h-screen xl:py-0 sm:py-40 py-20 w-full  flex justify-center"
      >
        <div className="xl:w-[50%] md:w-[80%] w-[90%] flex justify-center flex-col items-center  h-full">
          <h1 className=" sm:text-4xl text-base text-white font-extrabold uppercase animate__animated animate__fadeInUp ">
            Conseil spirituel
          </h1>
          <h3 className="md:text-3xl  sm:text-lg  font-bold text-base mt-8 text-red-500 animate__animated animate__fadeInUp">
            Cabinet de voyance du Professeur Sakho.
          </h3>
          <p className=" text-white font-bold sm:text-xl text-base mt-8 text-center  animate__animated animate__fadeInUp">
            Bienvenue sur mon site de voyance et de rituels de retour affectif !
            Découvrez mes services pour trouver des réponses et attirer l’amour
            véritable. Explorez dès maintenant et laissez la magie opérer dans
            votre vie.
          </p>
          <Button
            className="mt-5 rounded-full py-5 animate__animated  animate__infinite	animate__pulse"
            variant="outline"
          >
            Contactez-moi
          </Button>
        </div>
      </div>

      <div id="bio" className="w-full  justify-center flex mb-10 bg-[#080b13]">
        <div className="w-[80%] flex justify-between mt-10 mb-10 gap-5 flex-wrap">
          <div className="sm:w-[45%] w-full ">
            <h6 className="text-sm font-bold text-red-500 uppercase tracking-widest">
              Biographie
            </h6>
            <h1 className="mt-5 text-4xl text-white">
              Authentique et Unique, Concrets et Rapides, Disponible et Engagé.
            </h1>
            <Separator className="mt-5 w-40 bg-red-500" />

            <p className="text-white mt-5" ref={ref_bio}>
              Je Suis le Professeur Sakho, Grand Marabout aux Secrets Ancestraux
              Depuis plus de 30 ans, je mets au service des autres le
              savoir-faire précieux que j&apos;ai hérité de mes ancêtres,
              transmis de père en fils au Sénégal.
            </p>

            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button className="mt-5 rounded-full py-5 " variant="outline">
                  Lire plus
                  <Plus
                    className="h-7 w-7 cursor-pointer text-red-500"
                    aria-hidden="true"
                  />
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Biographie</AlertDialogTitle>
                  <AlertDialogDescription>
                    Je Suis le Professeur Sakho, Grand Marabout aux Secrets
                    Ancestraux Depuis plus de 30 ans, je mets au service des
                    autres le savoir-faire précieux que j&apos;ai hérité de mes
                    ancêtres, transmis de père en fils au Sénégal. Issu d'une
                    lignée de maîtres spirituels, je perpétue cette tradition
                    avec une rigueur et une passion profondes, apportant des
                    solutions puissantes et efficaces à tous ceux qui me
                    consultent. Mon travail est reconnu dans le monde entier,
                    grâce à mon engagement pour une pratique éthique et
                    respectueuse.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Fermer</AlertDialogCancel>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>

            <div className="w-full bg-white mt-5 py-3 px-3 rounded-xl">
              <h6 className="text-xs font-bold text-red-500 uppercase tracking-widest">
                Mon Approche Spirituelle, Authentique et Unique
              </h6>
              <p className="text-muted-foreground text-sm mt-2 ">
                J&apos;utilise des méthodes ancestrales, basées sur des rituels
                et des pratiques spirituelles profondément enracinées dans notre
                culture africaine. Chaque personne qui me consulte bénéficie
                d&apos;un accompagnement personnalisé, adapté aux difficultés
                qu&apos;elle traverse, qu&apos;il s’agisse de problèmes
                sentimentaux, familiaux, professionnels ou de santé. Je prends
                le temps d&apos;écouter et de comprendre chaque situation pour
                proposer un chemin clair et bienveillant.
              </p>
            </div>
          </div>
          <div className="sm:w-[45%] w-full flex flex-col  items-center justify-center">
            <div className="w-full bg-black mt-5 py-3 px-3 rounded-xl">
              <h6 className="text-xs font-bold text-red-500 uppercase tracking-widest">
                Votre Guide Spirituel, Disponible et Engagé
              </h6>
              <p className="text-white text-sm mt-2 ">
                Je suis là pour vous, que vous ayez besoin d'une consultation
                urgente ou d'un accompagnement à distance. Mon travail repose
                sur l’honnêteté et le sérieux, et je m'engage pleinement pour
                aider chacun à trouver des réponses et des solutions à ses
                préoccupations. Si vous cherchez un soutien sincère et efficace,
                contactez-moi, Professeur Sakho, et découvrez par vous-même la
                puissance de mon don.
              </p>
            </div>
            <div className="w-full bg-red-500 mt-5 py-3 px-3 rounded-xl">
              <h6 className="text-xs font-bold text-red-900 uppercase tracking-widest">
                Des Résultats Concrets et Rapides
              </h6>
              <p className="text-white text-sm mt-2 ">
                Mon savoir-faire me permet de produire des résultats rapides et
                durables, aidant ainsi ceux qui se sentent perdus ou accablés
                par la malchance. Avec moi, vous pourrez retrouver espoir et
                harmonie dans votre vie. Les témoignages de satisfaction de mes
                clients à travers le monde parlent d’eux-mêmes et témoignent de
                l&apos;efficacité de mes interventions.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id="services" className="flex justify-center mt-5 ">
        <h1 className="font-bold sm:text-5xl text-2xl">
          Mes services de marabout
        </h1>
      </div>
      <div className="w-full xl:py-0  py-10   flex justify-center gap-5 mb-5  items-center flex-wrap  sm:mt-8 mt-0">
        <div className="shadow-xl border-1 p-3 cursor-pointer flex justify-center rounded-xl items-center  gap-2 ">
          <span className="">Maraboutage</span>
        </div>
        <div className="shadow-xl border-1 p-3 cursor-pointer  flex justify-center rounded-xl items-center   gap-2 ">
          <span className="">Guérisseure</span>
        </div>
        <div className="shadow-xl border-1 p-3 cursor-pointer  flex justify-center rounded-xl items-center   gap-2 ">
          <span className="">Voyance</span>
        </div>
        <div className="shadow-xl border-1 p-3 cursor-pointer flex justify-center rounded-xl items-center  gap-2 bg-black ">
          <span className="text-white">Médium</span>
        </div>
        <div className="shadow-xl border-1 p-3 cursor-pointer  flex justify-center rounded-xl items-center   gap-2 bg-black">
          <span className=" text-white">Magie noire</span>
        </div>
        <div className="shadow-xl border-1 p-3 cursor-pointer  flex justify-center rounded-xl items-center   gap-2 bg-red-500">
          <span className=" text-white">Magie blanche</span>
        </div>
        <div className="shadow-xl border-1 p-3 cursor-pointer flex justify-center rounded-xl items-center  gap-2 bg-red-500">
          <span className="text-white">Désenvoûtement</span>
        </div>
        <div className="shadow-xl border-1 p-3 cursor-pointer  flex justify-center rounded-xl items-center   gap-2">
          <span className=" text-black">Retour affectif</span>
        </div>
      </div>
      <div className="w-full  justify-center flex mb-10 bg-[#2a324a]">
        <div
          ref={ref_services}
          className="w-[80%] flex justify-between mt-10 mb-10 gap-5 flex-wrap"
        >
          <div className=" w-full ">
            <ScrollAnimation animateIn="fadeInLeft">
              <h6 className="text-sm font-bold text-red-500 uppercase tracking-widest">
                Rituels de marabouts
              </h6>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInLeft">
              <h1 className="mt-5 text-4xl text-white">
                Pratiques et rituels ésotériques
              </h1>
            </ScrollAnimation>
            <Separator className="mt-5 w-40 bg-red-500" />

            <div className="flex gap-2 mt-5 justify-center items-center flex-wrap">
              <ScrollAnimation
                animateIn="backInUp"
                className="bg-white rounded-lg py-10 p-2 flex flex-col justify-center items-center lg:w-[30%] lg:h-[300px] "
              >
                <div className="bg-red-400 rounded-full mb-5 p-5">
                  <Check
                    className="h-7 w-7 cursor-pointer text-white"
                    aria-hidden="true"
                  />
                </div>
                <h6 className="text-sm font-bold text-red-500 uppercase tracking-widest">
                  Rituels de marabouts
                </h6>
                <p className="text-center mt-5 text-muted-foreground">
                  Le professeur Sakho est un marabout traditionnelle, pratiquant
                  le maraboutage, le mataboutisme et le maraboutik, dans le
                  respect des coûtumes ancestrâles.
                </p>
              </ScrollAnimation>
              <ScrollAnimation
                animateIn="backInUp"
                className="bg-red-500 rounded-lg py-10 p-2 flex flex-col justify-center items-center  lg:w-[30%] lg:h-[500px]"
              >
                <div className="bg-red-400 rounded-full mb-5 p-5">
                  <Check
                    className="h-7 w-7 cursor-pointer text-white"
                    aria-hidden="true"
                  />
                </div>
                <h6 className="text-sm font-bold text-white uppercase tracking-widest">
                  VOYANCE DIRECT
                </h6>
                <p className="mt-5 text-white text-center">
                  Vous recherchez un voyant ou une voyante de confiance afin de
                  connaître votre avenir ? Faîtes confiance à l&apos;expertise
                  et aux savoirs faire de Maître Sakho.
                </p>
              </ScrollAnimation>
              <ScrollAnimation
                animateIn="backInUp"
                className="bg-white rounded-lg py-10 p-2 flex flex-col justify-center items-center lg:w-[30%] lg:h-[300px]"
              >
                <div className="bg-red-400 rounded-full mb-5 p-5">
                  <Check
                    className="h-7 w-7 cursor-pointer text-white"
                    aria-hidden="true"
                  />
                </div>
                <h6 className="text-sm font-bold text-red-500 uppercase tracking-widest">
                  Médium sérieux
                </h6>
                <p className=" mt-5 text-center text-muted-foreground">
                  Grand spécialiste médium. Communication avec l&apos;au delà
                  afin de convoquer les esprits qui nous entourre et communiquer
                  avec des âmes disparus.
                </p>
              </ScrollAnimation>
            </div>
          </div>
          <div className=" w-full ">
            <div className="flex gap-2 mt-5 justify-center items-center flex-wrap">
              <ScrollAnimation
                animateIn="backInUp"
                className="bg-white rounded-lg py-10 p-2 flex flex-col justify-center items-center lg:w-[30%] lg:h-[300px] "
              >
                <div className="bg-red-400 rounded-full mb-5 p-5">
                  <Check
                    className="h-7 w-7 cursor-pointer text-white"
                    aria-hidden="true"
                  />
                </div>
                <h6 className="text-sm font-bold text-red-500 uppercase tracking-widest">
                  Guérisseur spirituel
                </h6>
                <p className="text-center mt-5 text-muted-foreground">
                  Vous souffrez d’une maladie inconnue, ou de maladie dûe au
                  stress, anxiété, angoisse et personne jusqu&apos;à présent
                  n&apos;a réussi à vous soigner ? Maître Sakho feras tout son
                  possible pour vous guérir et vous aider !
                </p>
              </ScrollAnimation>
              <ScrollAnimation
                animateIn="backInUp"
                className="bg-red-500 rounded-lg py-10 p-2 flex flex-col justify-center items-center  lg:w-[30%] lg:h-[500px]"
              >
                <div className="bg-red-400 rounded-full mb-5 p-5">
                  <Check
                    className="h-7 w-7 cursor-pointer text-white"
                    aria-hidden="true"
                  />
                </div>
                <h6 className="text-sm font-bold text-white uppercase tracking-widest">
                  Retour affectif rapide
                </h6>
                <p className="mt-5 text-white text-center">
                  Récupérer votre ex rapidement en toute simplicité avec Maître
                  Sakho. Il peut également vous aidez à trouver le grand amour
                  et éventuellement résoudre des problèmes de couple et
                  problèmes familiaux.
                </p>
              </ScrollAnimation>
              <ScrollAnimation
                animateIn="backInUp"
                className="bg-white rounded-lg py-10 p-2 flex flex-col justify-center items-center lg:w-[30%] lg:h-[300px]"
              >
                <div className="bg-red-400 rounded-full mb-5 p-5">
                  <Check
                    className="h-7 w-7 cursor-pointer text-white"
                    aria-hidden="true"
                  />
                </div>
                <h6 className="text-sm font-bold text-red-500 uppercase tracking-widest">
                  Travaux occultes
                </h6>
                <p className=" mt-5 text-center text-muted-foreground">
                  Les travaux occultes sont composés d’un ensemble de rituels de
                  magies élaborés et pratiqués par un mage, des sorciers ou un
                  marabout, des voyants ou une voyante, ou des médiums.
                </p>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </div>

      <div id="temoignage" className="w-full flex justify-center">
        <ScrollAnimation animateIn="fadeInLeft" className="lg:w-[40%]  mb-5">
          <h1 className="font-bold sm:text-5xl text-2xl text-center ">
            Découvrez l&apos;expérience inspirante de mes clients
          </h1>
        </ScrollAnimation>
      </div>
      <div
        ref={ref_temoin}
        className="bg-[url('/bg2.jpg')]  bg-cover	bg-opacity-25  sm:py-40 py-20 w-full gap-5 flex-wrap  flex justify-center"
      >
        <div className="bg-white rounded-lg py-5 p-2 flex flex-col justify-center items-center lg:w-[20%]  ">
          <div className="rounded-full  p-5 flex gap-2">
            <Stars
              className="h-7 w-7 cursor-pointer  text-yellow-300"
              aria-hidden="true"
            />
            <Stars
              className="h-7 w-7 cursor-pointer  text-yellow-300"
              aria-hidden="true"
            />
            <Stars
              className="h-7 w-7 cursor-pointer  text-yellow-300"
              aria-hidden="true"
            />
            <Stars
              className="h-7 w-7 cursor-pointer  text-yellow-300"
              aria-hidden="true"
            />
            <Stars
              className="h-7 w-7 cursor-pointer  text-yellow-300"
              aria-hidden="true"
            />
          </div>

          <p className="text-center  text-muted-foreground">
            “J&apos;ai récemment consulté le voyant Sakho pour obtenir des
            conseils sur la façon d&apos;aborder une collègue de travail avec
            élégance et sans la mettre mal à l&apos;aise si elle n&apos;était
            pas intéressée. Sakho m&apos;a donné des conseils très utiles et
            m&apos;a encouragé à être plus confiant et à ne pas me laisser
            intimider par le rejet.”
          </p>
        </div>
        <div className="bg-white rounded-lg py-5 p-2 flex flex-col justify-center items-center lg:w-[20%]  ">
          <div className="rounded-full  p-5 flex gap-2">
            <Stars
              className="h-7 w-7 cursor-pointer  text-yellow-300"
              aria-hidden="true"
            />
            <Stars
              className="h-7 w-7 cursor-pointer  text-yellow-300"
              aria-hidden="true"
            />
            <Stars
              className="h-7 w-7 cursor-pointer  text-yellow-300"
              aria-hidden="true"
            />
            <Stars
              className="h-7 w-7 cursor-pointer  text-yellow-300"
              aria-hidden="true"
            />
            <Stars
              className="h-7 w-7 cursor-pointer  text-yellow-300"
              aria-hidden="true"
            />
          </div>

          <p className="text-center  text-muted-foreground">
            “Je me souviens encore de ma première consultation de voyance avec
            Sakho il y a 3 ans. J&apos;étais très impressionnée par la précision
            et la profondeur de ses lectures.J&apos;ai ressenti un sentiment de
            sécurité et de bien-être après avoir parlé avec lui, et je me
            sentais vraiment connectée à mon intuition et à mon âme.”
          </p>
        </div>
        <div className="bg-white rounded-lg py-5 p-2 flex flex-col justify-center items-center lg:w-[20%]  ">
          <div className="rounded-full  p-5 flex gap-2">
            <Stars
              className="h-7 w-7 cursor-pointer  text-yellow-300"
              aria-hidden="true"
            />
            <Stars
              className="h-7 w-7 cursor-pointer  text-yellow-300"
              aria-hidden="true"
            />
            <Stars
              className="h-7 w-7 cursor-pointer  text-yellow-300"
              aria-hidden="true"
            />
            <Stars
              className="h-7 w-7 cursor-pointer  text-yellow-300"
              aria-hidden="true"
            />
            <Stars
              className="h-7 w-7 cursor-pointer  text-yellow-300"
              aria-hidden="true"
            />
          </div>

          <p className="text-center  text-muted-foreground">
            “J&apos;ai eu la chance de consulter le médium Doug sur une assez
            longue période. Il m&apos;a aidée à traverser mon deuil et à trouver
            des solutions pour aller de l&apos;avant. Il m&apos;a donné des
            conseils pratiques pour m&apos;aider à surmonter le chagrin et à
            reprendre le contrôle de ma vie. Sa présence et ses encouragements
            m&apos;ont beaucoup aidée psychologiquement.”
          </p>
        </div>
        <div className="bg-white rounded-lg py-5 p-2 flex flex-col justify-center items-center lg:w-[20%]  ">
          <div className="rounded-full  p-5 flex gap-2">
            <Stars
              className="h-7 w-7 cursor-pointer  text-yellow-300"
              aria-hidden="true"
            />
            <Stars
              className="h-7 w-7 cursor-pointer  text-yellow-300"
              aria-hidden="true"
            />
            <Stars
              className="h-7 w-7 cursor-pointer  text-yellow-300"
              aria-hidden="true"
            />
            <Stars
              className="h-7 w-7 cursor-pointer  text-yellow-300"
              aria-hidden="true"
            />
            <Stars
              className="h-7 w-7 cursor-pointer  text-yellow-300"
              aria-hidden="true"
            />
          </div>

          <p className="text-center  text-muted-foreground">
            “Je souffrais d’insomnie et de cauchemars depuis plusieurs semaines
            et j&apos;étais à bout de nerfs. J&apos;ai décidé de consulter le
            Guérisseur Sakho et je ne regrette pas. Après la séance, je me suis
            senti beaucoup plus détendu et serein. Je dors mieux et plus
            longtemps et je n&apos;ai plus de cauchemars. Je recommande vivement
            le Guérisseur Sakho.”
          </p>
        </div>
        <div className="bg-white rounded-lg py-5 p-2 flex flex-col justify-center items-center lg:w-[20%]  ">
          <div className="rounded-full  p-5 flex gap-2">
            <Stars
              className="h-7 w-7 cursor-pointer  text-yellow-300"
              aria-hidden="true"
            />
            <Stars
              className="h-7 w-7 cursor-pointer  text-yellow-300"
              aria-hidden="true"
            />
            <Stars
              className="h-7 w-7 cursor-pointer  text-yellow-300"
              aria-hidden="true"
            />
            <Stars
              className="h-7 w-7 cursor-pointer  text-yellow-300"
              aria-hidden="true"
            />
            <Stars
              className="h-7 w-7 cursor-pointer  text-yellow-300"
              aria-hidden="true"
            />
          </div>

          <p className="text-center  text-muted-foreground">
            “Je suis allé consulter le marabout Sakho pour essayer un rituel de
            désenvoûtement afin de me débarrasser des mauvaises énergies qui
            m&apos;entouraient. J&apos;avais beaucoup d&apos;appréhension et de
            doutes avant de me rendre à son cabinet, mais je suis très heureux
            de l’avoir fait. Sakho m&apos;a fait me sentir à l&apos;aise et
            m&apos;a expliqué en détail le processus du rituel”
          </p>
        </div>
        <div className="bg-white rounded-lg py-5 p-2 flex flex-col justify-center items-center lg:w-[20%]  ">
          <div className="rounded-full  p-5 flex gap-2">
            <Stars
              className="h-7 w-7 cursor-pointer  text-yellow-300"
              aria-hidden="true"
            />
            <Stars
              className="h-7 w-7 cursor-pointer  text-yellow-300"
              aria-hidden="true"
            />
            <Stars
              className="h-7 w-7 cursor-pointer  text-yellow-300"
              aria-hidden="true"
            />
            <Stars
              className="h-7 w-7 cursor-pointer  text-yellow-300"
              aria-hidden="true"
            />
            <Stars
              className="h-7 w-7 cursor-pointer  text-yellow-300"
              aria-hidden="true"
            />
          </div>

          <p className="text-center  text-muted-foreground">
            “Depuis que j&apos;ai contacté Sakho pour un rituel de retour
            affectif, j&apos;ai l&apos;impression que les choses commencent à
            changer. Mon ex femme et moi avons commencé à nous parler plus
            souvent et je sens qu&apos;elle commence à me faire à nouveau
            confiance. Sakho m&apos;a expliqué le processus et m&apos;a
            accompagné tout au long du chemin pour m&apos;assurer que tout se
            passe bien.”
          </p>
        </div>
      </div>

      <div id="contact" className="w-full  justify-center flex  bg-[#080b13]">
        <div className="w-[80%] flex justify-between mt-10 mb-10 gap-5 flex-wrap">
          <div className="w-full">
            <ScrollAnimation animateIn="fadeInLeft">
              <h6 className="text-sm font-bold text-red-500 uppercase tracking-widest">
                Contacter moi
              </h6>
            </ScrollAnimation>

            <ScrollAnimation animateIn="fadeInLeft">
              <h1 ref={ref_contact} className="mt-5 text-xl text-white">
                Vous avez des questions et vous souhaitez obtenir des réponses ?
                Vous êtes à la recherche de conseils et de soutien ? Ou
                peut-être que vous êtes prêt à démarrer votre voyage de
                découverte personnelle ? Si vous êtes prêt à explorer ces
                possibilités, je suis là pour vous aider. Utilisez le formulaire
                de contact ci-dessous pour me contacter et commencer votre
                voyage de découverte.
              </h1>
            </ScrollAnimation>
            <Separator className="mt-5 w-40 bg-red-500" />
            <div className="mt-5 w-full flex sm:flex-nowrap flex-wrap  gap-2">
              <Input type="text" className="text-white" placeholder="Nom" />
              <Input type="text" className="text-white" placeholder="Prenom" />
            </div>
            <div className="mt-5 w-full flex  sm:flex-nowrap flex-wrap gap-2">
              <Input type="email" className="text-white" placeholder="Email" />
              <Input
                type="number"
                className="text-white"
                placeholder="Telephone"
              />
            </div>

            <div className="mt-5 w-full">
              <Textarea
                className="text-white"
                placeholder="Entrez Votre message"
              />
              <div className="w-full flex justify-end">
                <Button className="bg-red-500 mt-5 hover:bg-red-400">
                  Evnoyer le message
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
