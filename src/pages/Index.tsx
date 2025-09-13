import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const historicalPeriods = [
    {
      period: "Древний мир",
      years: "3500 до н.э. - 476 н.э.",
      description: "Зарождение цивилизации, письменности и первых государств",
      color: "bg-amber-100 text-amber-800",
      image: "/img/1e88e265-61b1-4c94-a323-1372ab5af35d.jpg"
    },
    {
      period: "Средневековье",
      years: "476 - 1453",
      description: "Эпоха феодализма, крестовых походов и готического искусства",
      color: "bg-stone-100 text-stone-800",
      image: "/img/f34c6128-d6ed-4129-ad54-83f157cf6bb5.jpg"
    },
    {
      period: "Возрождение",
      years: "XIV - XVI века",
      description: "Расцвет искусства, науки и гуманистической философии",
      color: "bg-emerald-100 text-emerald-800",
      image: "/img/220cf480-c6a8-4823-b2f5-d83d332344d6.jpg"
    }
  ];

  const exhibitions = [
    {
      title: "Сокровища Древнего Египта",
      description: "Уникальная коллекция артефактов времён фараонов",
      status: "Действующая",
      duration: "До декабря 2024",
      image: "/img/1e88e265-61b1-4c94-a323-1372ab5af35d.jpg"
    },
    {
      title: "Искусство Средневековья",
      description: "Манускрипты, иконы и предметы церковного искусства",
      status: "Временная",
      duration: "Октябрь - январь",
      image: "/img/f34c6128-d6ed-4129-ad54-83f157cf6bb5.jpg"
    },
    {
      title: "Античная скульптура",
      description: "Шедевры древнегреческого и римского искусства",
      status: "Постоянная",
      duration: "Круглый год",
      image: "/img/220cf480-c6a8-4823-b2f5-d83d332344d6.jpg"
    }
  ];

  const features = [
    { icon: "Search", title: "Интерактивный поиск", desc: "Найдите любой артефакт в коллекции" },
    { icon: "Calendar", title: "Временная шкала", desc: "Путешествие через исторические эпохи" },
    { icon: "MapPin", title: "Карта находок", desc: "География исторических открытий" },
    { icon: "Users", title: "Исторические личности", desc: "Биографии великих людей прошлого" },
    { icon: "Bookmark", title: "Хронология событий", desc: "Ключевые даты мировой истории" },
    { icon: "Book", title: "Цифровой архив", desc: "Оцифрованные исторические документы" }
  ];

  return (
    <div className="min-h-screen bg-background font-body">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-50 to-stone-100 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <Icon name="Building" size={64} className="text-primary" />
            </div>
            <h1 className="font-heading text-6xl font-semibold text-primary mb-6 animate-fade-in">
              Исторический Музей
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Откройте для себя величие человеческой цивилизации через уникальные экспонаты 
              и интерактивные экспозиции, охватывающие тысячи лет истории
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3">
                <Icon name="Compass" size={20} className="mr-2" />
                Начать путешествие
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-3">
                <Icon name="Calendar" size={20} className="mr-2" />
                Виртуальная экскурсия
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="py-12 border-b">
        <div className="container mx-auto px-6">
          <Tabs defaultValue="periods" className="w-full">
            <TabsList className="grid w-full grid-cols-3 max-w-2xl mx-auto">
              <TabsTrigger value="periods" className="flex items-center gap-2">
                <Icon name="Clock" size={16} />
                Эпохи
              </TabsTrigger>
              <TabsTrigger value="exhibitions" className="flex items-center gap-2">
                <Icon name="Eye" size={16} />
                Экспозиции
              </TabsTrigger>
              <TabsTrigger value="features" className="flex items-center gap-2">
                <Icon name="Zap" size={16} />
                Функции
              </TabsTrigger>
            </TabsList>

            {/* Historical Periods */}
            <TabsContent value="periods" className="mt-12">
              <div className="text-center mb-12">
                <h2 className="font-heading text-4xl font-semibold text-primary mb-4">
                  Исторические эпохи
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Совершите путешествие через века и познакомьтесь с ключевыми периодами человеческой истории
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {historicalPeriods.map((period, index) => (
                  <Card key={index} className="overflow-hidden group hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={period.image} 
                        alt={period.period}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <CardTitle className="font-heading text-2xl text-primary">
                          {period.period}
                        </CardTitle>
                        <Badge className={period.color}>
                          {period.years}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {period.description}
                      </p>
                      <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        Изучить эпоху
                        <Icon name="ArrowRight" size={16} className="ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Exhibitions */}
            <TabsContent value="exhibitions" className="mt-12">
              <div className="text-center mb-12">
                <h2 className="font-heading text-4xl font-semibold text-primary mb-4">
                  Текущие экспозиции
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Посетите наши специально подготовленные выставки с редкими историческими артефактами
                </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                {exhibitions.map((exhibition, index) => (
                  <Card key={index} className="overflow-hidden group hover:shadow-xl transition-all duration-500">
                    <div className="aspect-square overflow-hidden">
                      <img 
                        src={exhibition.image} 
                        alt={exhibition.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <CardTitle className="font-heading text-xl text-primary line-clamp-2">
                          {exhibition.title}
                        </CardTitle>
                        <Badge variant={exhibition.status === 'Действующая' ? 'default' : 'secondary'}>
                          {exhibition.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-accent-foreground flex items-center gap-2">
                        <Icon name="Calendar" size={14} />
                        {exhibition.duration}
                      </p>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-muted-foreground mb-4">
                        {exhibition.description}
                      </p>
                      <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                        <Icon name="Ticket" size={16} className="mr-2" />
                        Забронировать билет
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Features */}
            <TabsContent value="features" className="mt-12">
              <div className="text-center mb-12">
                <h2 className="font-heading text-4xl font-semibold text-primary mb-4">
                  Возможности портала
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Современные технологии для изучения истории и интерактивного исследования прошлого
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                  <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/20 group">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <Icon name={feature.icon as any} size={24} className="text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-heading text-lg font-semibold text-primary mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          {feature.desc}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-gradient-to-r from-stone-50 to-amber-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl font-semibold text-primary mb-4">
              Временная шкала истории
            </h2>
            <p className="text-lg text-muted-foreground">
              Ключевые события, изменившие ход человеческой истории
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary/20"></div>
            
            <div className="space-y-12">
              {[
                { year: "3500 до н.э.", event: "Изобретение письменности в Месопотамии", side: "left" },
                { year: "776 до н.э.", event: "Первые Олимпийские игры в Древней Греции", side: "right" },
                { year: "221 до н.э.", event: "Объединение Китая императором Цинь Шихуанди", side: "left" },
                { year: "1453", event: "Падение Константинополя", side: "right" },
                { year: "1492", event: "Открытие Америки Христофором Колумбом", side: "left" },
                { year: "1789", event: "Начало Французской революции", side: "right" }
              ].map((item, index) => (
                <div key={index} className={`flex ${item.side === 'left' ? 'justify-start' : 'justify-end'} relative`}>
                  <div className={`w-5/12 ${item.side === 'left' ? 'pr-8 text-right' : 'pl-8'}`}>
                    <Card className="p-6 hover:shadow-lg transition-all duration-300 animate-fade-in" 
                          style={{animationDelay: `${index * 0.1}s`}}>
                      <div className="flex items-center gap-3 mb-2">
                        <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                          {item.year}
                        </Badge>
                      </div>
                      <p className="text-foreground font-medium">
                        {item.event}
                      </p>
                    </Card>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "50,000+", label: "Артефактов в коллекции", icon: "Gem" },
              { number: "25", label: "Исторических эпох", icon: "Clock" },
              { number: "100+", label: "Интерактивных экспонатов", icon: "MousePointer" },
              { number: "1M+", label: "Посетителей ежегодно", icon: "Users" }
            ].map((stat, index) => (
              <div key={index} className="animate-fade-in" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="flex justify-center mb-4">
                  <Icon name={stat.icon as any} size={48} className="text-primary-foreground/80" />
                </div>
                <h3 className="font-heading text-4xl font-bold mb-2">
                  {stat.number}
                </h3>
                <p className="text-primary-foreground/80">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-100 py-12 mt-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-heading text-2xl font-semibold text-primary mb-4 flex items-center gap-2">
                <Icon name="Building" size={24} />
                Исторический Музей
              </h3>
              <p className="text-muted-foreground">
                Сохраняем и представляем богатое наследие человеческой цивилизации 
                для будущих поколений.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Контакты</h4>
              <div className="space-y-2 text-muted-foreground">
                <p className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  Москва, Красная площадь, д. 1
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Clock" size={16} />
                  Ежедневно 10:00-18:00
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (495) 123-45-67
                </p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Социальные сети</h4>
              <div className="flex gap-4">
                {['Instagram', 'Facebook', 'Twitter', 'Youtube'].map((social) => (
                  <Button key={social} variant="outline" size="sm" className="w-10 h-10 p-0">
                    <Icon name="Share2" size={16} />
                  </Button>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-stone-300 mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Исторический Музей. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;