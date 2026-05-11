import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import {
  Phone, Mail, MapPin, Clock, ShieldCheck, Award, BadgeCheck, Wallet,
  Star, Calendar, Stethoscope, Sparkles, Car, Train, ArrowRight,
} from "lucide-react";

import clinicInterior from "@/assets/clinic-interior.jpg";
import sterileHands from "@/assets/sterile-hands.jpg";
import happyPatient from "@/assets/happy-patient.jpg";
import doctorMain from "@/assets/doctor-poryvaev.jpg";
import doctorFemale from "@/assets/doctor-female.jpg";
import doctorYoung from "@/assets/doctor-young.jpg";
import sterilization from "@/assets/sterilization.jpg";

const PHONE_DISPLAY = "8 (843) 238-12-38";
const PHONE_TEL = "+78432381238";
const EMAIL = "stom-08@mail.ru";
const CITY = "Казань";
const ADDRESS = "ул. Бутлерова, 29, Казань";

const services = [
  { name: "Консультация и осмотр", from: 0, to: 500, note: "первичная — бесплатно" },
  { name: "Профессиональная гигиена", from: 4500, to: 7000 },
  { name: "Лечение кариеса", from: 3500, to: 8500 },
  { name: "Лечение каналов", from: 6500, to: 18000 },
  { name: "Удаление зуба", from: 2500, to: 9000 },
  { name: "Художественная реставрация", from: 7500, to: 15000, sale: "−15% до конца месяца" },
  { name: "Имплантация (под ключ)", from: 38000, to: 75000, sale: "рассрочка 0%" },
  { name: "Виниры и коронки", from: 18000, to: 42000 },
];

const doctors = [
  {
    name: "Доктор Порываев",
    role: "Главный врач, стоматолог-терапевт, ортопед",
    years: "Опыт более 20 лет",
    img: doctorMain,
    certs: ["Сертификат МГМСУ", "Член СтАР", "Имплантология Nobel Biocare"],
  },
  {
    name: "Анна Сергеевна",
    role: "Врач-гигиенист, пародонтолог",
    years: "Опыт 12 лет",
    img: doctorFemale,
    certs: ["EMS Air-Flow", "Сертификат пародонтолога"],
  },
  {
    name: "Игорь Андреевич",
    role: "Стоматолог-ортодонт",
    years: "Опыт 8 лет",
    img: doctorYoung,
    certs: ["Invisalign Provider", "Брекет-системы Damon"],
  },
];

const trustItems = [
  { icon: ShieldCheck, title: "Лицензия", text: "Действующая лицензия на медицинскую деятельность" },
  { icon: Award, title: "Сертификаты врачей", text: "Регулярное повышение квалификации" },
  { icon: BadgeCheck, title: "Гарантия на работы", text: "До 3 лет на пломбы и реставрации" },
  { icon: Wallet, title: "Рассрочка 0%", text: "Без переплат на имплантацию и ортодонтию" },
];

const cases = [
  {
    title: "Реставрация передних зубов",
    story: "Пациентка обратилась со сколами после травмы. Восстановили эстетику за один визит, без коронок.",
    img: happyPatient,
  },
  {
    title: "Имплантация после удаления",
    story: "Установили имплант сразу после удаления зуба — пациент вернулся к привычному рациону через 4 месяца.",
    img: sterileHands,
  },
];

const reviews = [
  { name: "Алия Р.", source: "Яндекс Карты", text: "Очень внимательный доктор, всё объяснил перед лечением. Цены такие, как сказали по телефону — никаких сюрпризов.", rating: 5 },
  { name: "Марат И.", source: "2ГИС", text: "Делал чистку и лечил два зуба. Не больно, аккуратно. Записаться было удобно через сайт.", rating: 5 },
];

const Index = () => {
  const [form, setForm] = useState({ name: "", phone: "", service: "", time: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      toast({ title: "Заполните имя и телефон", description: "Мы перезвоним в течение 15 минут." });
      return;
    }
    toast({ title: "Заявка отправлена", description: `Спасибо, ${form.name}! Свяжемся с вами в ближайшее время.` });
    setForm({ name: "", phone: "", service: "", time: "" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* HEADER */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="container-x flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2 font-bold">
            <ToothLogo className="h-7 w-7 text-primary" />
            <span className="font-[Manrope] tracking-tight">Стоматология Порываева</span>
          </a>
          <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
            <a href="#services" className="hover:text-primary transition">Услуги</a>
            <a href="#doctors" className="hover:text-primary transition">Врачи</a>
            <a href="#cases" className="hover:text-primary transition">Кейсы</a>
            <a href="#safety" className="hover:text-primary transition">Безопасность</a>
            <a href="#contacts" className="hover:text-primary transition">Контакты</a>
          </nav>
          <a href={`tel:${PHONE_TEL}`} className="hidden sm:flex items-center gap-2 text-sm font-semibold text-primary">
            <Phone className="h-4 w-4" />{PHONE_DISPLAY}
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="container-x grid lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-14 py-12 lg:py-20 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-primary-soft text-primary text-sm font-semibold px-3 py-1.5 rounded-full mb-6">
              <Sparkles className="h-4 w-4" /> Казань · приём по записи
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05] mb-5">
              Стоматология, в которой <span className="text-primary">понятно всё</span> — от диагноза до счёта
            </h1>
            <p className="text-lg text-muted-foreground mb-7 max-w-xl">
              Прозрачные цены без сюрпризов, гарантия на работы и онлайн-запись в удобное время. За 10 лет нам доверились более 6 127 пациентов.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <Button asChild size="lg" className="h-12 px-6 text-base font-semibold">
                <a href="#booking"><Calendar className="mr-2 h-5 w-5" />Записаться онлайн</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-12 px-6 text-base">
                <a href="#booking">Получить план лечения</a>
              </Button>
            </div>
            <div className="flex flex-wrap gap-x-7 gap-y-3 text-sm">
              <div className="flex items-center gap-2"><Star className="h-4 w-4 fill-accent text-accent" /><span><b>5,0</b> · Яндекс Карты</span></div>
              <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-primary" />Гарантия на работы</div>
              <div className="flex items-center gap-2"><Wallet className="h-4 w-4 text-primary" />Рассрочка 0%</div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-3 bg-primary-soft rounded-[28px] -z-10" />
            <img
              src={clinicInterior}
              alt="Интерьер стоматологического кабинета"
              width={1536}
              height={1024}
              className="w-full rounded-3xl shadow-soft object-cover aspect-[4/3]"
            />
            <div className="absolute -bottom-5 -left-5 bg-card rounded-2xl shadow-card p-4 flex items-center gap-3 max-w-[260px]">
              <div className="bg-primary/10 text-primary p-2 rounded-xl"><Stethoscope className="h-5 w-5" /></div>
              <div>
                <div className="font-semibold text-sm">Первичный осмотр</div>
                <div className="text-xs text-muted-foreground">бесплатно при записи онлайн</div>
              </div>
            </div>
            <div className="absolute -top-4 right-4 bg-card rounded-2xl shadow-card p-3 hidden sm:flex items-center gap-2">
              <ToothLogo className="h-9 w-9 text-primary animate-tooth" />
              <div className="text-xs">
                <div className="font-semibold">6 127+</div>
                <div className="text-muted-foreground">пациентов за 10 лет</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-16 lg:py-24">
        <div className="container-x">
          <SectionHead
            tag="Услуги"
            title="Цены от и до — никаких сюрпризов в кресле"
            subtitle="Финальная стоимость фиксируется в плане лечения после осмотра. Без навязанных процедур."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
            {services.map((s) => (
              <div key={s.name} className="bg-card rounded-2xl p-5 shadow-card border border-border/60 flex flex-col">
                <div className="font-semibold mb-3">{s.name}</div>
                <div className="text-2xl font-bold text-primary font-[Manrope] mb-2">
                  {s.from === 0 ? "от 0 ₽" : `${s.from.toLocaleString("ru")} – ${s.to.toLocaleString("ru")} ₽`}
                </div>
                {s.sale && (
                  <span className="inline-block self-start text-xs font-semibold bg-accent/20 text-foreground px-2 py-1 rounded-full mb-2">
                    {s.sale}
                  </span>
                )}
                {s.note && <div className="text-xs text-muted-foreground">{s.note}</div>}
                <a href="#booking" className="mt-auto pt-4 text-sm text-primary font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all">
                  Записаться <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOCTORS */}
      <section id="doctors" className="py-16 lg:py-24 bg-secondary/50">
        <div className="container-x">
          <SectionHead
            tag="Команда"
            title="Врачи, которым доверяют 6 127+ пациентов"
            subtitle="Сертификаты, опыт и профильная специализация — каждый случай ведёт профильный специалист."
          />
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {doctors.map((d) => (
              <div key={d.name} className="bg-card rounded-2xl overflow-hidden shadow-card border border-border/60">
                <img src={d.img} alt={d.name} loading="lazy" className="w-full aspect-[4/5] object-cover" />
                <div className="p-5">
                  <div className="font-bold text-lg font-[Manrope]">{d.name}</div>
                  <div className="text-primary text-sm font-semibold mt-1">{d.role}</div>
                  <div className="text-sm text-muted-foreground mt-1">{d.years}</div>
                  <ul className="mt-3 space-y-1.5">
                    {d.certs.map((c) => (
                      <li key={c} className="text-sm flex items-start gap-2">
                        <BadgeCheck className="h-4 w-4 text-primary mt-0.5 shrink-0" />{c}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASES */}
      <section id="cases" className="py-16 lg:py-24">
        <div className="container-x">
          <SectionHead
            tag="Кейсы"
            title="Истории пациентов до и после"
            subtitle="Реальные работы наших врачей с короткими историями."
          />
          <div className="grid md:grid-cols-2 gap-6 mt-10">
            {cases.map((c) => (
              <article key={c.title} className="bg-card rounded-2xl overflow-hidden shadow-card border border-border/60">
                <div className="grid grid-cols-2 gap-0.5 bg-border">
                  <div className="relative bg-card">
                    <img src={c.img} alt="до" loading="lazy" className="w-full h-48 object-cover grayscale opacity-90" />
                    <span className="absolute top-2 left-2 text-xs font-semibold bg-background/90 px-2 py-0.5 rounded">До</span>
                  </div>
                  <div className="relative bg-card">
                    <img src={c.img} alt="после" loading="lazy" className="w-full h-48 object-cover" />
                    <span className="absolute top-2 left-2 text-xs font-semibold bg-primary text-primary-foreground px-2 py-0.5 rounded">После</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-lg font-[Manrope] mb-2">{c.title}</h3>
                  <p className="text-sm text-muted-foreground">{c.story}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS animation */}
      <section className="py-16 lg:py-20 bg-primary text-primary-foreground">
        <div className="container-x">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-3 font-[Manrope]">Как проходит ваш визит</h2>
          <p className="text-center text-primary-foreground/80 mb-10 max-w-xl mx-auto">
            От первого звонка до результата — без скрытых шагов
          </p>
          <ProcessSVG />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-8 text-center text-sm">
            {["Заявка онлайн", "Осмотр и план лечения", "Прозрачная смета", "Лечение и гарантия"].map((s, i) => (
              <div key={s}>
                <div className="text-2xl font-bold font-[Manrope] mb-1">0{i + 1}</div>
                <div className="text-primary-foreground/85">{s}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-16 lg:py-24">
        <div className="container-x">
          <SectionHead
            tag="Отзывы"
            title="5,0 на Яндекс Картах"
            subtitle="Подтверждённые отзывы пациентов из независимых сервисов."
          />
          <div className="grid md:grid-cols-2 gap-5 mt-10">
            {reviews.map((r) => (
              <div key={r.name} className="bg-card rounded-2xl p-6 shadow-card border border-border/60">
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                  <span className="ml-2 text-xs text-muted-foreground">{r.source}</span>
                </div>
                <p className="text-foreground/90 mb-3">«{r.text}»</p>
                <div className="text-sm font-semibold">{r.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SAFETY */}
      <section id="safety" className="py-16 lg:py-24 bg-secondary/50">
        <div className="container-x grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <SectionHead
              align="left"
              tag="Безопасность"
              title="Стерильность и оборудование экспертного класса"
              subtitle="Каждый инструмент проходит четырёхэтапную обработку. Одноразовые наборы вскрываем при пациенте."
            />
            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              {trustItems.map(({ icon: Icon, title, text }) => (
                <div key={title} className="bg-card rounded-2xl p-5 shadow-card border border-border/60">
                  <div className="bg-primary/10 text-primary inline-flex p-2 rounded-xl mb-3">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="font-semibold mb-1">{title}</div>
                  <div className="text-sm text-muted-foreground">{text}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img src={sterilization} alt="Стерилизационная зона" loading="lazy" width={1280} height={896} className="rounded-3xl shadow-soft w-full aspect-[4/3] object-cover" />
          </div>
        </div>
      </section>

      {/* MAP */}
      <section id="contacts" className="py-16 lg:py-24">
        <div className="container-x">
          <SectionHead
            tag="Как добраться"
            title={ADDRESS}
            subtitle="Удобное расположение в центре Казани, в Вахитовском районе. Бесплатная парковка для пациентов."
          />
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-6 mt-10">
            <div className="rounded-3xl overflow-hidden shadow-card border border-border/60 aspect-[4/3] lg:aspect-auto lg:min-h-[420px] bg-card">
              <iframe
                title="Карта проезда — ул. Бутлерова, 29, Казань"
                src="https://yandex.ru/map-widget/v1/?text=%D1%83%D0%BB.%20%D0%91%D1%83%D1%82%D0%BB%D0%B5%D1%80%D0%BE%D0%B2%D0%B0%2C%2029%2C%20%D0%9A%D0%B0%D0%B7%D0%B0%D0%BD%D1%8C&z=17"
                width="100%"
                height="100%"
                frameBorder={0}
                className="w-full h-full"
                loading="lazy"
              />
            </div>
            <div className="space-y-4">
              <InfoRow icon={MapPin} title="Адрес" value={ADDRESS} />
              <InfoRow icon={Phone} title="Телефон" value={PHONE_DISPLAY} href={`tel:${PHONE_TEL}`} />
              <InfoRow icon={Mail} title="Email" value={EMAIL} href={`mailto:${EMAIL}`} />
              <InfoRow icon={Clock} title="График" value="Пн–Сб: 9:00 – 21:00 · Вс: по записи" />
              <InfoRow icon={Car} title="Парковка" value="Бесплатная для пациентов" />
              <InfoRow icon={Train} title="Транспорт" value="Удобно добираться от ближайших станций метро" />
            </div>
          </div>
        </div>
      </section>

      {/* BOOKING */}
      <section id="booking" className="py-16 lg:py-24 bg-secondary/60">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHead align="left" tag="Запись" title="Запишитесь онлайн" subtitle="Перезвоним в течение 15 минут, подтвердим время и подскажем, как подготовиться." />
            <ul className="mt-6 space-y-3 text-sm">
              <li className="flex gap-2"><BadgeCheck className="h-5 w-5 text-primary shrink-0" />Бесплатная консультация при записи онлайн</li>
              <li className="flex gap-2"><BadgeCheck className="h-5 w-5 text-primary shrink-0" />Прозрачный план лечения и смета на руки</li>
              <li className="flex gap-2"><BadgeCheck className="h-5 w-5 text-primary shrink-0" />Рассрочка 0% и официальные документы</li>
            </ul>
          </div>
          <form onSubmit={submit} className="bg-card rounded-3xl p-6 md:p-8 shadow-soft border border-border/60 space-y-4">
            <div>
              <Label htmlFor="name">Ваше имя</Label>
              <Input id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Как к вам обращаться" className="h-11 mt-1.5" />
            </div>
            <div>
              <Label htmlFor="phone">Телефон</Label>
              <Input id="phone" type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+7 (___) ___-__-__" className="h-11 mt-1.5" />
            </div>
            <div>
              <Label>Услуга</Label>
              <Select value={form.service} onValueChange={(v) => setForm({ ...form, service: v })}>
                <SelectTrigger className="h-11 mt-1.5"><SelectValue placeholder="Выберите услугу" /></SelectTrigger>
                <SelectContent>
                  {services.map((s) => <SelectItem key={s.name} value={s.name}>{s.name}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Удобное время</Label>
              <Select value={form.time} onValueChange={(v) => setForm({ ...form, time: v })}>
                <SelectTrigger className="h-11 mt-1.5"><SelectValue placeholder="Когда вам удобно?" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="morning">Утро (9:00 – 12:00)</SelectItem>
                  <SelectItem value="day">День (12:00 – 16:00)</SelectItem>
                  <SelectItem value="evening">Вечер (16:00 – 21:00)</SelectItem>
                  <SelectItem value="weekend">В выходной</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button type="submit" size="lg" className="w-full h-12 text-base font-semibold">
              Записаться онлайн
            </Button>
            <p className="text-xs text-muted-foreground text-center">
              Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
            </p>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 border-t border-border">
        <div className="container-x flex flex-col md:flex-row gap-4 justify-between items-center text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <ToothLogo className="h-5 w-5 text-primary" />
            <span>© {new Date().getFullYear()} Стоматология Доктора Порываева, {CITY}</span>
          </div>
          <div className="flex gap-5">
            <a href={`tel:${PHONE_TEL}`} className="hover:text-primary">{PHONE_DISPLAY}</a>
            <a href={`mailto:${EMAIL}`} className="hover:text-primary">{EMAIL}</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

const SectionHead = ({ tag, title, subtitle, align = "center" }: { tag: string; title: string; subtitle?: string; align?: "center" | "left" }) => (
  <div className={align === "center" ? "text-center max-w-2xl mx-auto" : "max-w-xl"}>
    <div className={`inline-block text-xs font-bold uppercase tracking-wider text-primary bg-primary-soft px-3 py-1 rounded-full mb-3`}>{tag}</div>
    <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mb-3">{title}</h2>
    {subtitle && <p className="text-muted-foreground">{subtitle}</p>}
  </div>
);

const InfoRow = ({ icon: Icon, title, value, href }: { icon: any; title: string; value: string; href?: string }) => {
  const content = (
    <div className="flex items-start gap-3 bg-card border border-border/60 rounded-2xl p-4 shadow-card">
      <div className="bg-primary/10 text-primary p-2 rounded-xl"><Icon className="h-5 w-5" /></div>
      <div>
        <div className="text-xs text-muted-foreground">{title}</div>
        <div className="font-semibold">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href} className="block hover:opacity-90 transition">{content}</a> : content;
};

const ToothLogo = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 32 32" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path d="M16 3c-4 0-6 1.6-9 1.6C4.4 4.6 3 6.5 3 9.4c0 3.5 1.4 6.6 2.4 10 .8 2.7 1.2 9.6 4.2 9.6 2.6 0 2.4-7.2 4.4-7.2h4c2 0 1.8 7.2 4.4 7.2 3 0 3.4-6.9 4.2-9.6 1-3.4 2.4-6.5 2.4-10 0-2.9-1.4-4.8-4-4.8-3 0-5-1.6-9-1.6Z"
      fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
    <path d="M11 11c1-1.4 2.8-2 5-2s4 .6 5 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

const ProcessSVG = () => (
  <div className="max-w-3xl mx-auto">
    <svg viewBox="0 0 600 100" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <line x1="60" y1="50" x2="540" y2="50" stroke="hsl(var(--primary-foreground))" strokeOpacity="0.25" strokeWidth="2" strokeDasharray="6 6" />
      <line x1="60" y1="50" x2="540" y2="50" stroke="hsl(var(--accent))" strokeWidth="3" strokeLinecap="round" className="animate-draw" />
      {[60, 220, 380, 540].map((x, i) => (
        <g key={x}>
          <circle cx={x} cy="50" r="22" fill="hsl(var(--primary-foreground))" fillOpacity="0.12" />
          <circle cx={x} cy="50" r="14" className={`step-${i + 1}`} fill="hsl(var(--accent))" />
          <text x={x} y={55} textAnchor="middle" fontSize="14" fontWeight="700" fill="hsl(var(--primary))">{i + 1}</text>
        </g>
      ))}
    </svg>
  </div>
);

export default Index;
