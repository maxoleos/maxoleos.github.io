/*
 * Direção visual: Fluxo Circular — editorial ambiental contemporâneo.
 * Esta página privilegia clareza operacional, contraste, fotografia documental
 * e chamadas de ação honestas para coleta de óleo vegetal usado.
 */
import { useState } from "react";
import { Link } from "wouter";
import {
  ArrowUpRight,
  ChevronDown,
  CircleCheck,
  ClipboardList,
  Droplets,
  Factory,
  FileCheck2,
  Leaf,
  Mail,
  Menu,
  MessageCircle,
  Phone,
  Recycle,
  Route,
  ShieldCheck,
  Truck,
  X,
} from "lucide-react";

const WHATSAPP = "https://wa.me/5531992173328?text=Ol%C3%A1%2C%20quero%20agendar%20uma%20coleta%20de%20%C3%B3leo%20de%20cozinha.";
const FORM = "https://docs.google.com/forms/d/e/1FAIpQLSc63B8KGJ1P248-cbrTJcqqNmRdv4TU2CdM_6PBAtUhaMJMmQ/viewform?usp=sharing&ouid=100925435016212896354";
const EMAIL = "mailto:maxoleos.coleta@gmail.com";

const journeySteps: Array<{ n: string; title: string; text: string; Icon: typeof ClipboardList }> = [
  { n: "01", title: "Solicite", text: "Fale pelo WhatsApp ou preencha o formulário com cidade, volume e tipo de gerador.", Icon: ClipboardList },
  { n: "02", title: "Avalie", text: "A equipe verifica a região, a quantidade e a melhor forma de encaixar a coleta.", Icon: Route },
  { n: "03", title: "Recolha", text: "Combinamos o dia ou indicamos um ponto de recebimento disponível na rota.", Icon: Truck },
  { n: "04", title: "Encaminhe", text: "O óleo segue para uma empresa habilitada, conforme o resíduo e a documentação aplicável.", Icon: Recycle },
  { n: "05", title: "Transforme", text: "A maior parte é destinada à fabricação de biodiesel; outras indústrias podem participar conforme as características do material.", Icon: Factory },
];

const areas = [
  "Belo Horizonte", "Contagem", "Betim", "Nova Lima", "Sabará", "Santa Luzia", "Lagoa Santa", "Sete Lagoas", "Caeté", "Ribeirão das Neves", "Vespasiano", "Itabirito", "Brumadinho", "Esmeraldas", "Igarapé", "Pará de Minas", "Barão de Cocais", "Santa Bárbara", "Jaboticatubas", "Matozinhos", "Pedro Leopoldo", "Sarzedo", "Ibirité", "Raposos", "Rio Acima", "São José de Bicas", "Juatuba", "Mateus Leme", "Mário Campos", "São José da Lapa", "Confins", "Baldim", "Florestal", "Capim Branco", "Moeda", "Itaúna", "Itaguara", "Belo Vale", "Bonfim", "Fortuna de Minas", "Inhaúma", "Maravilhas", "Paraopeba", "São José da Varginha", "Taquaraçu de Minas",
];

function Brand({ dark = false }: { dark?: boolean }) {
  return <div className={`brand ${dark ? "brand--dark" : ""}`}><img src="/assets/maxoleo-mark.png" alt="" aria-hidden="true" /><span><strong>MAXÓLEO</strong><small>SOLUÇÕES AMBIENTAIS</small></span></div>;
}

function SectionKicker({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <p className={`kicker ${light ? "kicker--light" : ""}`}><span className="kicker-dot" />{children}</p>;
}

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState<number | null>(0);
  const navItems = [["Como funciona", "#como-funciona"], ["Educação ambiental", "#impacto"], ["Para empresas", "#empresas"], ["Contato", "#contato"]];

  return <div className="site-shell">
    <header className="site-header"><div className="nav-wrap"><a href="#top" aria-label="Voltar ao início"><Brand /></a><nav className={`desktop-nav ${menuOpen ? "desktop-nav--open" : ""}`} aria-label="Navegação principal">{navItems.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}</nav><div className="nav-actions"><a className="nav-email" href={EMAIL} aria-label="Enviar e-mail para a MAXÓLEO"><Mail size={16} /><span>E-mail</span></a><a className="button button--small button--green" href={WHATSAPP} target="_blank" rel="noreferrer"><MessageCircle size={16} /> Agendar coleta</a><button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</button></div></div></header>

    <main id="top">
      <section className="hero"><div className="hero-glow" /><div className="hero-content container"><div className="hero-copy"><SectionKicker light>COLETA DE ÓLEO VEGETAL USADO</SectionKicker><h1>Seu óleo usado pode seguir <em>uma rota melhor.</em></h1><p className="hero-lede">A MAXÓLEO é uma iniciativa da MR Desentupidora para recolher, transportar e encaminhar óleo de cozinha usado com mais organização, documentação e responsabilidade ambiental.</p><div className="hero-actions"><a className="button button--cream" href={WHATSAPP} target="_blank" rel="noreferrer"><MessageCircle size={18} /> Falar pelo WhatsApp <ArrowUpRight size={17} /></a><a className="text-link text-link--light" href="#como-funciona">Entender o processo <ArrowUpRight size={16} /></a></div><div className="hero-note"><CircleCheck size={18} /> Atendimento para residências, condomínios, restaurantes e empresas</div></div><div className="hero-visual"><div className="hero-photo-frame"><img src="/assets/veiculo-1.png" alt="Veículo plotado utilizado na operação da MR Desentupidora" /></div><div className="hero-stamp"><Leaf size={18} /><span>Uma iniciativa<br />MR Desentupidora</span></div><div className="hero-route-card"><span className="route-line" /><div><small>ROTA DE DESTINAÇÃO</small><strong>Coleta → Transporte → Aproveitamento</strong></div></div></div></div><div className="hero-bottom container"><span>MAXÓLEO / SOLUÇÕES AMBIENTAIS</span><span className="hero-scroll">Role para conhecer <ChevronDown size={16} /></span></div></section>

      <section className="intro section-pad"><div className="container intro-grid"><div className="intro-aside"><span className="section-index">01</span><span className="vertical-rule" /><span className="aside-label">POR QUE<br />MAXÓLEO</span></div><div className="intro-main"><SectionKicker>UMA PARCERIA QUE FAZ SENTIDO</SectionKicker><h2>O que parece descarte pode virar <span>matéria-prima.</span></h2><p className="lead-text">Em vez de deixar o óleo usado chegar à pia ou ao ralo, você pode organizar a entrega para uma cadeia de aproveitamento mais responsável. A MAXÓLEO avalia a melhor rota de recolhimento conforme o volume e a região.</p><div className="intro-detail"><div><strong>Pequenos geradores</strong><p>Ao atingir o volume combinado ou quando a equipe estiver na região, agendamos a retirada.</p></div><div><strong>Grandes geradores</strong><p>Restaurantes, bares, indústrias e condomínios podem contar com recolhimentos recorrentes.</p></div></div></div></div></section>

      <section className="dark-band" id="como-funciona"><div className="container section-pad"><div className="section-heading section-heading--light"><div><SectionKicker light>COMO FUNCIONA</SectionKicker><h2>Da solicitação à transformação em biodiesel.</h2></div><p>Um caminho simples para quem entrega e transparente sobre o que acontece depois. A rota final pode variar conforme o tipo de resíduo e a documentação aplicável.</p></div><div className="journey-rail">{journeySteps.map(({ n, title, text, Icon: StepIcon }) => <div className="journey-step" key={n}><span className="journey-marker"><StepIcon size={19} /></span><div className="journey-copy"><span className="process-number">{n}</span><h3>{title}</h3><p>{text}</p></div></div>)}</div></div></section>

      <section className="photo-split section-pad"><div className="container photo-split-grid"><div className="photo-stack"><img className="photo-main" src="/assets/recipiente-oleo.png" alt="Recipiente para entrega de óleo vegetal usado" /><img className="photo-small" src="/assets/ponto-recolhimento-condominio.jfif" alt="Ponto de recolhimento em condomínio" /><span className="photo-caption">CUIDADO COM O RESÍDUO<br />COMEÇA NO ACONDICIONAMENTO</span></div><div className="photo-copy"><SectionKicker>PARA QUEM GERA</SectionKicker><h2>Da cozinha de casa à operação de uma empresa.</h2><p>O modelo de recolhimento se adapta ao seu contexto. Pessoas físicas, condomínios e negócios podem fazer parte da rota, sem transformar a sustentabilidade em uma tarefa complicada.</p><div className="audience-list"><div><span>01</span><div><strong>Residências</strong><p>Armazene e combine a entrega quando houver volume suficiente ou rota próxima.</p></div></div><div><span>02</span><div><strong>Condomínios</strong><p>Instalamos um ponto de recolhimento e organizamos a retirada conforme a movimentação.</p></div></div><div><span>03</span><div><strong>Restaurantes e empresas</strong><p>Para grandes geradores, avaliamos periodicidade e logística de recolhimento.</p></div></div></div></div></div></section>

      <section className="impact-section section-pad" id="impacto"><div className="container"><div className="section-heading"><div><SectionKicker>EDUCAÇÃO AMBIENTAL / IMPACTO</SectionKicker><h2>Uma escolha pequena, uma rota com mais cuidado.</h2></div><p>Educação ambiental começa quando o destino do resíduo deixa de ser invisível. O objetivo é explicar o que fazer, por que fazer e como participar.</p></div><div className="impact-grid"><div className="impact-story impact-story--warning"><span className="impact-index">01</span><Droplets size={30} /><h3>Quando vai para a pia</h3><p>O óleo pode aderir aos encanamentos, contribuir para entupimentos e chegar à rede de esgoto ou ao ambiente de forma inadequada. Por isso, pia, ralo e lixo comum não são rotas de descarte.</p></div><div className="impact-story impact-story--good"><span className="impact-index">02</span><Recycle size={30} /><h3>Quando segue uma rota correta</h3><p>Ao ser armazenado e entregue corretamente, o óleo usado pode voltar para a cadeia produtiva. A rota principal informada pela MAXÓLEO é a fabricação de biodiesel, com outras possibilidades industriais conforme o material recebido.</p></div><div className="impact-practice"><span className="impact-index">03</span><strong>TRÊS ATITUDES PARA COMEÇAR</strong><div><span>1</span><p>Espere esfriar antes de guardar.</p></div><div><span>2</span><p>Use um recipiente fechado, limpo e sem água.</p></div><div><span>3</span><p>Solicite a coleta ou procure um ponto disponível.</p></div></div></div><div className="impact-source">Conteúdo educativo baseado em orientações públicas sobre descarte correto, educação ambiental e reaproveitamento do óleo vegetal residual. <a href="https://www.gov.br/mme/pt-br/assuntos/secretarias/petroleo-gas-natural-e-biocombustiveis/biodiesel/oleos-e-gorduras-residuais-na-producao-de-biocombustiveis/documentos-da-resolucao-cnpe-13-2024/panorama-sobre-o-oleo-vegetal-residual-no-brasil" target="_blank" rel="noreferrer">Consultar referência</a></div></div></section>

      <section className="business-section" id="empresas"><div className="container business-grid"><div><SectionKicker>PARA EMPRESAS</SectionKicker><h2>Mais do que recolher: <span>organizar a responsabilidade.</span></h2><p>Para empresas, a destinação de resíduos precisa caber na operação e fazer sentido na documentação. A MAXÓLEO pode integrar o recolhimento a serviços técnicos da MR Desentupidora, conforme avaliação e contratação.</p><a className="button button--green" href={FORM} target="_blank" rel="noreferrer">Preencher dados da empresa <ArrowUpRight size={17} /></a></div><div className="business-panel"><div className="panel-top"><ShieldCheck size={22} /><span>DOCUMENTAÇÃO E RASTREABILIDADE</span></div><h3>Quando aplicável, a movimentação é registrada na documentação ambiental correspondente.</h3><div className="document-row"><FileCheck2 size={20} /><div><strong>MTR</strong><p>Manifesto de Transporte de Resíduos, emitido pelo gerador conforme o sistema aplicável.</p></div></div><div className="document-row"><Recycle size={20} /><div><strong>CDF</strong><p>Certificado de Destinação Final, emitido pelo destinador para comprovar o tratamento ou destinação da carga.</p></div></div><small>O procedimento pode variar conforme o tipo de resíduo, a origem, o volume e a regulamentação aplicável.</small></div></div></section>

      <section className="areas-section" id="atendimento"><div className="container"><div className="section-heading"><div><SectionKicker>ÁREA DE ATENDIMENTO</SectionKicker><h2>Minas Gerais em movimento.</h2></div><p>Atendemos Belo Horizonte e cidades da região metropolitana e centro-oeste de Minas. Cada localidade passa por avaliação de rota ou periodicidade.</p></div><div className="areas-cloud">{areas.map((area, i) => <span key={`${area}-${i}`} className={i % 5 === 0 ? "area-pill area-pill--featured" : "area-pill"}>{area}</span>)}</div></div></section>

      <section className="faq-section section-pad"><div className="container faq-grid"><div><SectionKicker>ANTES DE SOLICITAR</SectionKicker><h2>Algumas respostas rápidas.</h2><p>Se sua dúvida não estiver aqui, a equipe responde pelo WhatsApp.</p><a className="text-link" href={WHATSAPP} target="_blank" rel="noreferrer">Tirar uma dúvida <ArrowUpRight size={16} /></a></div><div className="faq-list">{[["Qual é a quantidade mínima para coleta?", "Em regiões próximas ou que já estejam na rota, trabalhamos inicialmente com referência de 10 litros. A viabilidade depende da distância, do volume e da periodicidade."], ["A MAXÓLEO compra o óleo?", "A proposta principal é uma parceria de troca por serviços técnicos da MR Desentupidora, como limpeza de caixa de gordura, sucção de fossas e soluções ambientais. Não prometemos pagamento em dinheiro."], ["Para onde vai o óleo?", "A maior parte é encaminhada para fabricação de biodiesel. Conforme as características do resíduo, também pode ser direcionada a outras indústrias, como sabão, tintas ou outros aproveitamentos permitidos."], ["Posso levar o óleo a um ponto de recebimento?", "Sim. Existem soluções para pontos fixos em condomínios e outros locais parceiros. Fale com a equipe para avaliar a disponibilidade na sua região."]].map(([question, answer], i) => <div className={`faq-item ${faqOpen === i ? "faq-item--open" : ""}`} key={question}><button onClick={() => setFaqOpen(faqOpen === i ? null : i)} aria-expanded={faqOpen === i}><span>{question}</span><ChevronDown size={19} /></button>{faqOpen === i && <p>{answer}</p>}</div>)}</div></div></section>

      <section className="contact-section" id="contato"><div className="container contact-grid"><div><SectionKicker light>FALE COM A MAXÓLEO</SectionKicker><h2>Vamos encontrar a melhor rota para o seu óleo.</h2><p>Conte o que você gera, onde está e qual volume costuma acumular. A equipe avalia o melhor caminho para o recolhimento.</p><div className="contact-actions"><a className="button button--cream" href={WHATSAPP} target="_blank" rel="noreferrer"><MessageCircle size={18} /> Agendar pelo WhatsApp</a><a className="button button--outline-light" href={FORM} target="_blank" rel="noreferrer">Preencher formulário <ArrowUpRight size={17} /></a></div></div><div className="contact-info"><div className="contact-item"><Phone size={20} /><div><span>WHATSAPP</span><a href={WHATSAPP} target="_blank" rel="noreferrer">(31) 99217-3328</a></div></div><div className="contact-item"><Mail size={20} /><div><span>E-MAIL</span><a href={EMAIL}>maxoleos.coleta@gmail.com</a></div></div><div className="contact-item"><Route size={20} /><div><span>OPERAÇÃO</span><p>Coletas agendadas e pontos de recebimento, conforme região e rota.</p></div></div></div></div></section>
    </main>

    <a className="whatsapp-float" href={WHATSAPP} target="_blank" rel="noreferrer" aria-label="Agendar coleta pelo WhatsApp"><MessageCircle size={23} /><span>Agendar coleta</span></a>
    <footer className="site-footer"><div className="container footer-top"><div><Brand dark /><p>Coleta e encaminhamento responsável de óleo vegetal usado.</p></div><div className="footer-links"><a href="#como-funciona">Como funciona</a><a href="#impacto">Educação ambiental</a><a href="#empresas">Para empresas</a><a href="#contato">Contato</a><Link href="/privacidade">Privacidade</Link></div><div className="footer-mr"><span>UMA INICIATIVA DA</span><strong>MR Desentupidora</strong><small>Serviços técnicos e soluções ambientais</small></div></div><div className="container footer-bottom"><p>MAXÓLEO é uma iniciativa da MR Desentupidora Ltda. · CNPJ 21.587.809/0001-31</p><p>Licença Ambiental Simplificada LAS/Cadastro nº 87111231/2018 · Cadastro Ibama nº 6569940</p></div></footer>
  </div>;
}

export default Home;
