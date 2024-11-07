<script>
  import Contact from "$lib/Contact.svelte";
  import ExecutiveTeam from "$lib/ExecutiveTeam.svelte";
  import FaQ from "$lib/FaQ.svelte";
  import Planeta from "$lib/Planeta.svelte";
  import Price from "$lib/Price.svelte";
  import Seo from "$lib/Seo.svelte";
  import Servicos from "$lib/Servicos.svelte";
  import Sobre from "$lib/Sobre.svelte";
  import Testemunhas from "$lib/Testemunhas.svelte";
</script>

<body class="bg-gray-950 relative">
  <section class="lg:mt-20 mt-5 flex justify-center items-center w-full">
    <div
      class="lg:w-3/4 w-full gap-y-8 flex flex-col px-5 items-center justify-center"
    >
      <div class="gradient-x-5 gradient-border px-5 py-1 rounded-full">
        <span class="text-white">Seja bem-vindo no nosso site</span>
      </div>
      <h1
        class="text-center font-bold lg:text-6xl text-4xl text-transparent bg-gradient-radial bg-clip-text"
      >
        Levando Sua Presença Digital a Todos os Cantos do Mundo
      </h1>
      <div class="lg:px-20 flex flex-col justify-center items-center gap-y-5">
        <p class="text-white text-center text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam tenetur
          animi modi dignissimos aliquam molestias, quam omnis earum a eaque
          nemo, dolor quia repellat! Dignissimos velit labore nostrum
          perspiciatis commodi!
        </p>
        <div
          class="flex lg:flex-row flex-col text-white *:text-center *:lg:w-auto *:w-full *:rounded-lg gap-5"
        >
          <a
            href=""
            class="relative gradient-border-btn p-2 text-white bg-gray-950 px-5 rounded-md transition-all duration-1000"
          >
            Inicie a sua expansão
          </a>

          <a
            href=""
            class="space-x-2 flex items-center border border-raven-200 hover:border-raven-400 text-white px-5 py-3"
          >
            <span>Explore nossos projectos</span>
            <span class="h-full items-center"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-5 mt-[5px]"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </span>
          </a>
        </div>
      </div>
      <Planeta />
    </div>
  </section>
  <section class="flex 2xl:px-20 lg:px-16 px-2 justify-center">
    <div
      class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 *:space-y-5 *:bg-gradient-to-t *:to-gray-900 *:from-gray-950 *:2xl:p-8 *:lg:p-5 *:p-5 *:rounded-lg gap-8"
    >
      <article
        class="text-gray-400 text-sm"
        data-aos="fade-up"
        data-aos-anchor-placement="center-center"
        data-aos-duration="1000"
      >
        <div class="flex items-center space-x-3 text-gray-300 text-lg">
          <span
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6 text-[#0d70ff]"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
              />
            </svg></span
          >
          <h2>Posicionamento no google</h2>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          dolore, voluptates corporis accusantium animi ratione! Iusto et
          necessitatibus quam autem quasi rerum sunt corrupti eius assumenda?
          Fugit adipisci facere recusandae.
        </p>
      </article>
      <article
        class="text-gray-400 text-sm"
        data-aos="fade-up"
        data-aos-anchor-placement="center-center"
        data-aos-duration="1000"
      >
        <div class="flex items-center space-x-3 text-gray-300 text-lg">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6 text-[#0d70ff]"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"
              />
            </svg>
          </span>
          <h2>SEO e Analytics para alcançar seu público</h2>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          dolore, voluptates corporis accusantium animi ratione! Iusto et
          necessitatibus quam autem quasi rerum sunt corrupti eius assumenda?
          Fugit adipisci facere recusandae.
        </p>
      </article>
      <article
        class="text-gray-400 text-sm"
        data-aos="fade-up"
        data-aos-anchor-placement="center-center"
        data-aos-duration="1000"
      >
        <div class="flex items-center space-x-3 text-gray-300 text-lg">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6 text-[#0d70ff]"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
              />
            </svg>
          </span>
          <h2>Sites que atraem e convertem clientes</h2>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          dolore, voluptates corporis accusantium animi ratione! Iusto et
          necessitatibus quam autem quasi rerum sunt corrupti eius assumenda?
          Fugit adipisci facere recusandae.
        </p>
      </article>
      <article
        class="text-gray-400 text-sm"
        data-aos="fade-up"
        data-aos-anchor-placement="center-center"
        data-aos-duration="1200"
      >
        <div class="flex items-center space-x-3 text-gray-300 text-lg">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6 text-[#0d70ff]"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
              />
            </svg>
          </span>
          <h2>Otimização Focada no público certo</h2>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          dolore, voluptates corporis accusantium animi ratione! Iusto et
          necessitatibus quam autem quasi rerum sunt corrupti eius assumenda?
          Fugit adipisci facere recusandae.
        </p>
      </article>
      <article
        class="text-gray-400 text-sm"
        data-aos="fade-up"
        data-aos-anchor-placement="center-center"
        data-aos-duration="1200"
      >
        <div class="flex items-center space-x-3 text-gray-300 text-lg">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6 text-[#0d70ff]"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
              />
            </svg>
          </span>
          <h2>Otimização Focada no público certo</h2>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          dolore, voluptates corporis accusantium animi ratione! Iusto et
          necessitatibus quam autem quasi rerum sunt corrupti eius assumenda?
          Fugit adipisci facere recusandae.
        </p>
      </article>
      <article
        class="text-gray-400 text-sm"
        data-aos="fade-up"
        data-aos-anchor-placement="center-center"
        data-aos-duration="1200"
      >
        <div class="flex items-center space-x-3 text-gray-300 text-lg">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6 text-[#0d70ff]"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
              />
            </svg>
          </span>
          <h2>Otimização Focada no público certo</h2>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          dolore, voluptates corporis accusantium animi ratione! Iusto et
          necessitatibus quam autem quasi rerum sunt corrupti eius assumenda?
          Fugit adipisci facere recusandae.
        </p>
      </article>
    </div>
  </section>
  <Sobre />
  <ExecutiveTeam />
  <Servicos />
  <Seo />
  <section
    class="w-full bg-slate-900 lg:px-20 px-5 py-10 space-y-20 overflow-hidden"
  >
    <div class="space-y-5">
      <div
        class="flex flex-col space-y-5"
        data-aos="fade-up"
        data-aos-anchor-placement="center-center"
        data-aos-duration="1000"
      >
        <span class="text-gray-600 font-semibold">NOSSAS SOLUÇÕES</span>
        <h2
          class="text-5xl font-bold text-transparent bg-gradient-radial bg-clip-text"
        >
          Criamos sites de alto <br />desempenho
        </h2>
        <div class="lg:w-[500px] w-full">
          <p class="text-gray-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. A libero
            necessitatibus vitae, sunt atque dolore repudiandae quia, alias
            veniam doloribus laborum sapiente perferendis! Voluptatibus tempore
            porro, laborum ducimus quidem ex.
          </p>
        </div>
      </div>

      <div class="grid gap-5 lg:grid-cols-2 *:lg:h-52 *:h-auto grid-cols-1">
        <article
          class="w-full space-x-5 border border-gray-600 rounded-xl flex lg:p-8 p-5"
          data-aos="fade-up"
          data-aos-anchor-placement="center-center"
          data-aos-duration="1000"
        >
          <div
            class="border p-4 border-purple-800 bg-purple-700/15 flex justify-center items-center rounded-lg lg:w-20 h-14"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="Layer_1"
              data-name="Layer 1"
              viewBox="0 0 24 24"
              class="size-6"
              fill="#6b21a8"
              ><path
                d="m23.952,8.462l-1.414-1.414-2.524,2.524-5.586-5.586,2.524-2.524L15.538.048l-3.076,3.076-8.283,3.074L.01,23.99l17.792-4.169,3.074-8.283,3.076-3.076Zm-7.652,9.657l-11.761,2.756,4.943-4.943c.165.044.339.068.518.068,1.105,0,2-.895,2-2s-.895-2-2-2-2,.895-2,2c0,.179.024.353.068.518l-4.943,4.943,2.756-11.761,6.879-2.553,6.093,6.093-2.553,6.879Z"
              /></svg
            >
          </div>
          <div class="flex flex-col space-y-3">
            <h2 class="text-white font-semibold text-2xl">Design de UX / UI</h2>
            <p class="text-gray-400 text-lg">
              Vivamus eu est eget ipsum molestie commodo in idtam scelerisque
              vehicula felis, vitae volutpat diam efficir id.
            </p>
          </div>
        </article>
        <article
          class="w-full space-x-5 border border-gray-600 rounded-xl flex lg:p-8 p-5"
          data-aos="fade-up"
          data-aos-anchor-placement="center-center"
          data-aos-duration="1000"
        >
          <div
            class="border border-green-800 p-4 bg-green-700/15 flex justify-center items-center rounded-lg w-20 h-14"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6 text-green-800"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
              />
            </svg>
          </div>
          <div class="flex flex-col space-y-3">
            <h2 class="text-white font-semibold text-2xl">
              Desenvolvimento da Web
            </h2>
            <p class="text-gray-400 text-lg">
              Vivamus eu est eget ipsum molestie commodo in idtam scelerisque
              vehicula felis, vitae volutpat diam efficir id.
            </p>
          </div>
        </article>
        <article
          class="w-full space-x-5 border border-gray-600 rounded-xl flex lg:p-8 p-5"
          data-aos="fade-up"
          data-aos-anchor-placement="center-center"
          data-aos-duration="1000"
        >
          <div
            class="border p-4 border-yellow-600 bg-yellow-600/15 flex justify-center items-center rounded-lg w-20 h-14"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6 text-yellow-600"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z"
              />
            </svg>
          </div>
          <div class="flex flex-col space-y-3">
            <h2 class="text-white font-semibold text-2xl">
              Desenvolvimento de Aplicativos Móveis
            </h2>
            <p class="text-gray-400 text-lg">
              Vivamus eu est eget ipsum molestie commodo in idtam scelerisque
              vehicula felis, vitae volutpat diam efficir id.
            </p>
          </div>
        </article>
        <article
          class="w-full space-x-5 border border-gray-600 rounded-xl flex lg:p-8 p-5"
          data-aos="fade-up"
          data-aos-anchor-placement="center-center"
          data-aos-duration="1000"
        >
          <div
            class="border border-cyan-600 p-4 bg-cyan-400/15 flex justify-center items-center rounded-lg w-20 h-14"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6 text-cyan-600"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
              />
            </svg>
          </div>
          <div class="flex flex-col space-y-3">
            <h2 class="text-white font-semibold text-2xl">
              Garantia de qualidade
            </h2>
            <p class="text-gray-400 text-lg">
              Vivamus eu est eget ipsum molestie commodo in idtam scelerisque
              vehicula felis, vitae volutpat diam efficir id.
            </p>
          </div>
        </article>
      </div>
    </div>
    <div
      class="text-center flex justify-center items-center flex-col text-white space-y-5 px-5"
      data-aos="fade-up"
      data-aos-anchor-placement="center-center"
      data-aos-duration="1000"
    >
      <span>PILHA DE TECNOLOGÍA MODERNA</span>
      <h2 class="font-semibold text-3xl">Construindo a web</h2>
      <div class="space-y-10 w;full flex flex-col items-center">
        <div class="lg:w-[700px] text-center text-white">
          <p>
            Trabalhamos com tecnologias de ponta projetadas para resolver as
            necessidades do seu produto. Concentre-se em encontrar soluções para
            as necessidades do seu negócio enquanto lidamos com o aspecto
            técnico.
          </p>
        </div>
        <div
          class="grid lg:grid-cols-4 grid-cols-2 lg:justify-items-center gap-8 *:flex *:items-center"
        >
          <article class="space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40px"
              height="40px"
              viewBox="0 0 32 32"
              fill="none"
            >
              <rect x="2" y="2" width="28" height="28" fill="#FFCA28" />
              <path
                d="M19 25.2879L21.0615 23.9237C21.2231 24.4313 22.2462 25.6368 23.5385 25.6368C24.8308 25.6368 25.4308 24.931 25.4308 24.463C25.4308 23.1878 24.1112 22.7382 23.4774 22.5223C23.374 22.4871 23.289 22.4581 23.2308 22.4328C23.2009 22.4198 23.1558 22.4025 23.0979 22.3804C22.393 22.1111 19.7923 21.1175 19.7923 18.2373C19.7923 15.065 22.8538 14.7002 23.5462 14.7002C23.9991 14.7002 26.1769 14.7557 27.2615 16.7939L25.2615 18.1898C24.8231 17.3015 24.0946 17.0081 23.6462 17.0081C22.5385 17.0081 22.3077 17.8201 22.3077 18.1898C22.3077 19.227 23.5112 19.6919 24.5273 20.0844C24.7932 20.1871 25.0462 20.2848 25.2615 20.3866C26.3692 20.91 28 21.7666 28 24.463C28 25.8136 26.8672 28.0002 24.0154 28.0002C20.1846 28.0002 19.1692 25.7003 19 25.2879Z"
                fill="#3E3E3E"
              />
              <path
                d="M9 25.5587L11.1487 24.1953C11.317 24.7026 11.9713 25.638 12.9205 25.638C13.8698 25.638 14.3557 24.663 14.3557 24.1953V15.0002H16.9982V24.1953C17.041 25.4636 16.3376 28.0002 13.2332 28.0002C10.379 28.0002 9.19242 26.3039 9 25.5587Z"
                fill="#3E3E3E"
              />
            </svg>
            <span class="text-gray-500 text-lg">JavaScript</span>
          </article>
          <article class="space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="40px"
              height="40px"
              viewBox="-4 0 264 264"
              version="1.1"
              preserveAspectRatio="xMidYMid"
            >
              <g>
                <path
                  d="M255.855641,59.619717 C255.950565,59.9710596 256,60.3333149 256,60.6972536 L256,117.265345 C256,118.743206 255.209409,120.108149 253.927418,120.843385 L206.448786,148.178786 L206.448786,202.359798 C206.448786,203.834322 205.665123,205.195421 204.386515,205.937838 L105.27893,262.990563 C105.05208,263.119455 104.804608,263.201946 104.557135,263.289593 C104.464333,263.320527 104.376687,263.377239 104.278729,263.403017 C103.585929,263.58546 102.857701,263.58546 102.164901,263.403017 C102.051476,263.372083 101.948363,263.310215 101.840093,263.26897 C101.613244,263.186479 101.376082,263.1143 101.159544,262.990563 L2.07258227,205.937838 C0.7913718,205.201819 0,203.837372 0,202.359798 L0,32.6555248 C0,32.2843161 0.0515567729,31.9234187 0.144358964,31.5728326 C0.175293028,31.454252 0.24747251,31.3459828 0.288717928,31.2274022 C0.366053087,31.0108638 0.438232569,30.7891697 0.55165747,30.5880982 C0.628992629,30.4540506 0.742417529,30.3457814 0.83521972,30.2220451 C0.953800298,30.0570635 1.06206952,29.8869261 1.20127281,29.7425672 C1.31985339,29.6239866 1.4745237,29.5363401 1.60857131,29.4332265 C1.75808595,29.3094903 1.89213356,29.1754427 2.06227091,29.0774848 L2.06742659,29.0774848 L51.6134853,0.551122364 C52.8901903,-0.183535768 54.4613221,-0.183535768 55.7380271,0.551122364 L105.284086,29.0774848 L105.294397,29.0774848 C105.459379,29.1805983 105.598582,29.3094903 105.748097,29.4280708 C105.882144,29.5311844 106.031659,29.6239866 106.15024,29.7374115 C106.294599,29.8869261 106.397712,30.0570635 106.521448,30.2220451 C106.609095,30.3457814 106.727676,30.4540506 106.799855,30.5880982 C106.918436,30.7943253 106.985459,31.0108638 107.06795,31.2274022 C107.109196,31.3459828 107.181375,31.454252 107.212309,31.5779883 C107.307234,31.9293308 107.355765,32.2915861 107.356668,32.6555248 L107.356668,138.651094 L148.643332,114.878266 L148.643332,60.6920979 C148.643332,60.3312005 148.694889,59.9651474 148.787691,59.619717 C148.823781,59.4959808 148.890804,59.3877116 148.93205,59.269131 C149.014541,59.0525925 149.08672,58.8308984 149.200145,58.629827 C149.27748,58.4957794 149.390905,58.3875102 149.478552,58.2637739 C149.602288,58.0987922 149.705401,57.9286549 149.84976,57.7842959 C149.968341,57.6657153 150.117856,57.5780688 150.251903,57.4749553 C150.406573,57.351219 150.540621,57.2171714 150.705603,57.1192136 L150.710758,57.1192136 L200.261973,28.5928511 C201.538395,27.8571345 203.110093,27.8571345 204.386515,28.5928511 L253.932573,57.1192136 C254.107866,57.2223271 254.241914,57.351219 254.396584,57.4697996 C254.525476,57.5729132 254.674991,57.6657153 254.793572,57.7791402 C254.93793,57.9286549 255.041044,58.0987922 255.16478,58.2637739 C255.257582,58.3875102 255.371007,58.4957794 255.443187,58.629827 C255.561767,58.8308984 255.628791,59.0525925 255.711282,59.269131 C255.757683,59.3877116 255.824707,59.4959808 255.855641,59.619717 Z M247.740605,114.878266 L247.740605,67.8378666 L230.402062,77.8192579 L206.448786,91.6106946 L206.448786,138.651094 L247.745761,114.878266 L247.740605,114.878266 Z M198.194546,199.97272 L198.194546,152.901386 L174.633101,166.357704 L107.351512,204.757188 L107.351512,252.27191 L198.194546,199.97272 Z M8.25939501,39.7961379 L8.25939501,199.97272 L99.0921175,252.266755 L99.0921175,204.762344 L51.6392637,177.906421 L51.6237967,177.89611 L51.603174,177.885798 C51.443348,177.792996 51.3093004,177.658949 51.1597857,177.545524 C51.0308938,177.44241 50.8813791,177.359919 50.7679542,177.246494 L50.7576429,177.231027 C50.6235953,177.102135 50.5307931,176.942309 50.4173682,176.79795 C50.3142546,176.658747 50.1905184,176.540167 50.1080276,176.395808 L50.1028719,176.380341 C50.0100697,176.22567 49.9533572,176.040066 49.8863334,175.864773 C49.8193096,175.710103 49.7316631,175.565744 49.6904177,175.400762 L49.6904177,175.395606 C49.6388609,175.19969 49.6285496,174.993463 49.6079269,174.792392 C49.5873041,174.637722 49.5460587,174.483051 49.5460587,174.328381 L49.5460587,174.31807 L49.5460587,63.5689658 L25.5979377,49.7723734 L8.25939501,39.8012935 L8.25939501,39.7961379 Z M53.6809119,8.89300821 L12.3994039,32.6555248 L53.6706006,56.4180414 L94.9469529,32.6503692 L53.6706006,8.89300821 L53.6809119,8.89300821 Z M75.1491521,157.19091 L99.0972731,143.404629 L99.0972731,39.7961379 L81.7587304,49.7775291 L57.8054537,63.5689658 L57.8054537,167.177457 L75.1491521,157.19091 Z M202.324244,36.934737 L161.047891,60.6972536 L202.324244,84.4597702 L243.59544,60.6920979 L202.324244,36.934737 Z M198.194546,91.6106946 L174.24127,77.8192579 L156.902727,67.8378666 L156.902727,114.878266 L180.850848,128.664547 L198.194546,138.651094 L198.194546,91.6106946 Z M103.216659,197.616575 L163.759778,163.052915 L194.023603,145.781396 L152.778185,122.034346 L105.289242,149.374903 L62.0073307,174.292291 L103.216659,197.616575 Z"
                  fill="#FF2D20"
                >
                </path>
              </g>
            </svg>
            <span class="text-gray-500 text-lg">Laravel</span>
          </article>
          <article>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xmlns:serif="http://www.serif.com/"
              width="50px"
              height="50px"
              viewBox="0 0 64 64"
              version="1.1"
              xml:space="preserve"
              style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"
            >
              <rect
                id="Icons"
                x="-1088"
                y="-64"
                width="1280"
                height="800"
                style="fill:none;"
              />

              <g id="react">
                <circle
                  cx="32.001"
                  cy="31.955"
                  r="4.478"
                  style="fill:#00d8ff;"
                />

                <path
                  d="M32.33,22.516c7.635,0.052 15.965,0.609 21.683,5.708c0.168,0.15 0.33,0.306 0.488,0.467c1.349,1.375 2.054,3.595 0.965,5.422c-2.234,3.751 -7.23,5.387 -12.067,6.394c-7.234,1.506 -14.798,1.518 -22.029,0.192c-4.161,-0.764 -8.416,-2.103 -11.373,-4.904c-1.151,-1.09 -2.135,-2.524 -1.981,-4.12c0.25,-2.582 2.727,-4.239 4.812,-5.361c5.791,-3.116 12.847,-3.813 19.502,-3.798Zm-0.554,1.173c-7.224,0.049 -15.043,0.51 -20.621,5.129c-0.195,0.161 -0.383,0.33 -0.564,0.507c-0.117,0.114 -0.23,0.233 -0.339,0.355c-0.979,1.1 -1.316,2.867 -0.392,4.188c0.93,1.329 2.342,2.288 3.796,3.07c5.438,2.924 11.864,3.443 18.129,3.465c6.343,0.023 12.884,-0.555 18.487,-3.452c2.232,-1.155 4.744,-2.851 4.655,-5.035c-0.082,-2.004 -2.036,-3.242 -3.499,-4.126c-0.396,-0.239 -0.803,-0.46 -1.216,-0.668c-5.562,-2.787 -12.08,-3.447 -18.436,-3.433Z"
                  style="fill:#00d8ff;"
                />

                <path
                  d="M42.115,10.703c2.793,0.071 4.24,3.429 4.431,5.909c0.038,0.493 0.052,0.988 0.046,1.483c-0.006,0.536 -0.035,1.072 -0.082,1.606c-0.589,6.612 -3.608,12.909 -7.163,18.724c-3.477,5.688 -7.717,11.36 -13.485,13.996c-1.907,0.872 -4.175,1.41 -5.863,0.437c-2.314,-1.333 -2.567,-4.451 -2.524,-6.816c0.011,-0.581 0.049,-1.162 0.109,-1.741c0.889,-8.56 5.228,-16.669 10.658,-23.655c3.168,-4.076 6.937,-8.119 11.632,-9.583c0.739,-0.231 1.326,-0.371 2.241,-0.36Zm-0.134,1.172c-3.279,0.052 -6.223,2.482 -8.83,5.007c-6.854,6.637 -11.905,15.464 -13.937,24.721c-0.157,0.717 -0.289,1.439 -0.386,2.166c-0.075,0.563 -0.13,1.129 -0.159,1.697c-0.023,0.452 -0.031,0.905 -0.017,1.358c0.01,0.354 0.033,0.708 0.072,1.06c0.029,0.269 0.068,0.537 0.117,0.803c0.037,0.197 0.08,0.393 0.13,0.588c0.041,0.158 0.087,0.315 0.139,0.471c0.409,1.233 1.463,2.411 2.878,2.45c3.301,0.09 6.409,-2.317 9.096,-4.933c4.717,-4.591 8.232,-10.36 10.978,-16.424c2.216,-4.896 4.243,-10.218 3.111,-15.607c-0.043,-0.204 -0.093,-0.406 -0.15,-0.606c-0.047,-0.163 -0.1,-0.324 -0.158,-0.483c-0.44,-1.199 -1.475,-2.271 -2.884,-2.268Z"
                  style="fill:#00d8ff;"
                />

                <path
                  d="M22.109,10.747c3.564,0.069 6.765,2.488 9.607,5.197c5.186,4.943 9.011,11.231 11.913,17.849c2.248,5.127 4.316,10.882 2.478,16.292c-0.579,1.705 -2.044,3.265 -3.997,3.305c-3.581,0.072 -6.9,-2.532 -9.78,-5.335c-7.225,-7.034 -12.589,-16.32 -14.427,-26.168c-0.132,-0.704 -0.237,-1.414 -0.309,-2.127c-0.059,-0.582 -0.096,-1.167 -0.106,-1.752c-0.008,-0.472 0.002,-0.944 0.035,-1.414c0.022,-0.314 0.054,-0.626 0.097,-0.937c0.041,-0.292 0.093,-0.583 0.158,-0.871c0.043,-0.191 0.091,-0.38 0.146,-0.568c0.539,-1.843 1.941,-3.485 4.185,-3.471Zm-0.135,1.173c-2.087,0.046 -3.042,2.507 -3.234,4.234c-0.039,0.354 -0.063,0.711 -0.074,1.068c-0.014,0.456 -0.008,0.913 0.015,1.369c0.328,6.599 3.278,12.979 6.838,18.821c3.352,5.5 7.4,10.978 12.968,13.794c1.608,0.813 3.562,1.452 4.951,0.684c1.742,-0.964 1.956,-3.261 2.049,-4.973c0.025,-0.466 0.028,-0.934 0.013,-1.401c-0.018,-0.586 -0.064,-1.171 -0.133,-1.753c-0.642,-5.437 -3.05,-10.582 -5.816,-15.444c-3.442,-6.048 -7.659,-12.076 -13.627,-15.225c-1.236,-0.652 -2.574,-1.185 -3.95,-1.174Z"
                  style="fill:#00d8ff;"
                />
              </g>
            </svg>
            <span class="text-gray-500 text-lg">React</span>
          </article>
          <article class="space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="40"
              preserveAspectRatio="xMidYMid"
              viewBox="0 0 256 256"
              width="40"
              ><path
                d="m251.172245 116.593517-111.773492-111.76506398c-6.43232-6.43793736-16.872901-6.43793736-23.313647 0l-23.2097197 23.20971908 29.4426087 29.4426088c6.842415-2.3117025 14.687598-.7612046 20.14243 4.6936272 5.480111 5.4885383 7.019374 13.4011341 4.651494 20.2660201l28.375237 28.3752368c6.864886-2.365071 14.785908-.834235 20.268829 4.657112 7.662606 7.659797 7.662606 20.075017 0 27.740432-7.665415 7.665415-20.080635 7.665415-27.748859 0-5.763807-5.769426-7.187906-14.23537-4.269487-21.336201l-26.462394-26.4623945-.002809 69.6375845c1.867901.926928 3.631873 2.160023 5.187989 3.710521 7.662606 7.659797 7.662606 20.075017 0 27.746049-7.665415 7.662607-20.086252 7.662607-27.740432 0-7.662606-7.671032-7.662606-20.086252 0-27.746049 1.893181-1.890372 4.084102-3.320088 6.421084-4.280723v-70.2864335c-2.336982-.9550168-4.525094-2.3763067-6.421084-4.2807229-5.805941-5.7975142-7.201951-14.3168264-4.227354-21.4457468l-29.0212779-29.0268954-76.64010496 76.6344876c-6.44074623 6.443555-6.44074623 16.884136 0 23.322074l111.77349086 111.767872c6.435129 6.437938 16.872901 6.437938 23.316456 0l111.251042-111.248231c6.437935-6.440746 6.437935-16.886945 0-23.324883"
                fill="#de4c36"
              /></svg
            >
            <span class="text-gray-500 text-lg">Git</span>
          </article>
          <article class="space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="40px"
              height="40px"
              viewBox="-30.5 0 317 317"
              version="1.1"
              preserveAspectRatio="xMidYMid"
            >
              <defs>
                <linearGradient
                  x1="3.9517088%"
                  y1="26.9930287%"
                  x2="75.8970734%"
                  y2="52.9192657%"
                  id="linearGradient-1"
                >
                  <stop stop-color="#000000" offset="0%"> </stop>
                  <stop stop-color="#000000" stop-opacity="0" offset="100%">
                  </stop>
                </linearGradient>
              </defs>
              <g>
                <polygon
                  fill="#47C5FB"
                  points="157.665785 0.000549356223 0.000549356223 157.665785 48.8009614 206.466197 255.267708 0.000549356223"
                >
                </polygon>
                <polygon
                  fill="#47C5FB"
                  points="156.567183 145.396793 72.1487107 229.815265 121.132608 279.530905 169.842925 230.820587 255.267818 145.396793"
                >
                </polygon>
                <polygon
                  fill="#00569E"
                  points="121.133047 279.531124 158.214592 316.61267 255.267159 316.61267 169.842266 230.820807"
                >
                </polygon>
                <polygon
                  fill="#00B5F8"
                  points="71.5995742 230.364072 120.401085 181.562561 169.842046 230.821136 121.132827 279.531454"
                >
                </polygon>
                <polygon
                  fill-opacity="0.8"
                  fill="url(#linearGradient-1)"
                  points="121.132827 279.531454 161.692896 266.072227 165.721875 234.941308"
                >
                </polygon>
              </g>
            </svg>
            <span class="text-gray-500 text-lg">Flutter</span>
          </article>
          <article class="space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="40px"
              height="40px"
              viewBox="0 0 256 256"
              version="1.1"
              preserveAspectRatio="xMidYMid"
            >
              <g>
                <path
                  d="M70.534,69.696 L53.988,53.15 L54.058,172.75 L54.256,178.34 C54.338,180.97 54.826,183.938 55.64,187.014 L186.744,233.244 L219.516,218.724 L219.528,218.684 L70.534,69.696"
                  fill="#00D2B8"
                >
                </path>
                <path
                  d="M55.64,187.014 L55.648,187.022 C55.64,186.968 55.612,186.908 55.612,186.852 C55.612,186.908 55.62,186.96 55.64,187.014 L55.64,187.014 Z M219.516,218.724 L186.744,233.244 L55.648,187.022 C58.152,196.63 63.696,207.43 69.662,213.336 L112.446,255.876 L207.576,256 L219.528,218.684 L219.516,218.724 L219.516,218.724 Z"
                  fill="#55DDCA"
                >
                </path>
                <path
                  d="M3.034,130.116 C-1.202,134.638 0.902,143.966 7.722,150.838 L37.14,180.5 L55.64,187.014 C54.826,183.938 54.338,180.97 54.256,178.34 L54.058,172.75 L53.988,53.15 L3.034,130.116 Z"
                  fill="#0081C6"
                >
                </path>
                <path
                  d="M187.82,54.686 C184.744,53.9 181.794,53.414 179.12,53.33 L173.212,53.126 L53.988,53.142 L219.544,218.684 L219.558,218.684 L234.098,185.88 L187.82,54.686"
                  fill="#0079B3"
                >
                </path>
                <path
                  d="M187.67,54.654 C187.734,54.668 187.784,54.686 187.826,54.692 L187.82,54.686 C187.784,54.668 187.734,54.668 187.67,54.654 L187.67,54.654 Z M214.118,68.732 C208.11,62.674 197.452,57.168 187.826,54.692 L234.098,185.88 L219.558,218.684 L219.544,218.684 L255.076,207.336 L255.152,109.92 L214.118,68.732 L214.118,68.732 Z"
                  fill="#00A4E4"
                >
                </path>
                <path
                  d="M181.338,36.298 L151.684,6.862 C144.826,0.068 135.494,-2.046 130.984,2.178 L53.988,53.142 L173.212,53.126 L179.12,53.33 C181.794,53.414 184.744,53.9 187.82,54.686 L181.338,36.298 L181.338,36.298 Z"
                  fill="#00D2B8"
                >
                </path>
              </g>
            </svg>
            <span class="text-gray-500 text-lg">Dart</span>
          </article>
          <article class="space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="40"
              viewBox="0 0 24 24"
              width="40"
              ><g fill="none" fill-rule="evenodd" transform="translate(4)"
                ><circle cx="12" cy="12" fill="#19bcfe" r="4" /><path
                  d="m4 24c2.209139 0 4-1.790861 4-4 0-.6030539 0-1.9363872 0-4-1.79696123 0-3.13029457 0-4 0-2.209139 0-4 1.790861-4 4s1.790861 4 4 4z"
                  fill="#09cf83"
                /><path
                  d="m4 16h4v-8c-1.930287 0-3.26362033 0-4 0-2.209139 0-4 1.790861-4 4s1.790861 4 4 4z"
                  fill="#a259ff"
                /><path
                  d="m4 8h4v-8c-1.930287 0-3.26362033 0-4 0-2.209139 0-4 1.790861-4 4s1.790861 4 4 4z"
                  fill="#f24e1e"
                /><path
                  d="m12 8h-4v-8h4c2.209139 0 4 1.790861 4 4s-1.790861 4-4 4z"
                  fill="#ff7262"
                /></g
              ></svg
            >
            <span class="text-gray-500 text-lg">Figma</span>
          </article>
          <article class="space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40px"
              height="40px"
              viewBox="0 0 32 32"
              fill="none"
            >
              <circle cx="16" cy="16" r="14" fill="#8892BF" />
              <path
                d="M14.4392 10H16.1192L15.6444 12.5242H17.154C17.9819 12.5419 18.5986 12.7269 19.0045 13.0793C19.4184 13.4316 19.5402 14.1014 19.3698 15.0881L18.5541 19.4889H16.8497L17.6288 15.2863C17.7099 14.8457 17.6856 14.533 17.5558 14.348C17.426 14.163 17.146 14.0705 16.7158 14.0705L15.3644 14.0573L14.3661 19.4889H12.6861L14.4392 10Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.74092 12.5243H10.0036C10.9612 12.533 11.6552 12.8327 12.0854 13.4229C12.5156 14.0132 12.6576 14.8193 12.5115 15.8414C12.4548 16.3085 12.3289 16.7665 12.1341 17.2159C11.9474 17.6652 11.6878 18.0704 11.355 18.4317C10.9491 18.8898 10.5149 19.1805 10.0523 19.304C9.58969 19.4274 9.11076 19.489 8.61575 19.489H7.15484L6.69222 22H5L6.74092 12.5243ZM7.43485 17.9956L8.16287 14.0441H8.40879C8.49815 14.0441 8.5914 14.0396 8.6888 14.0309C9.33817 14.0221 9.87774 14.0882 10.308 14.2291C10.7462 14.37 10.8923 14.9031 10.7462 15.8282C10.5678 16.9296 10.2186 17.5727 9.69926 17.7577C9.1799 17.934 8.53053 18.0176 7.75138 18.0088H7.58094C7.53224 18.0088 7.48355 18.0043 7.43485 17.9956Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M24.4365 12.5243H21.1738L19.4329 22H21.1251L21.5878 19.489H23.0487C23.5437 19.489 24.0226 19.4274 24.4852 19.304C24.9479 19.1805 25.382 18.8898 25.7879 18.4317C26.1207 18.0704 26.3803 17.6652 26.567 17.2159C26.7618 16.7665 26.8877 16.3085 26.9444 15.8414C27.0905 14.8193 26.9486 14.0132 26.5183 13.4229C26.0881 12.8327 25.3942 12.533 24.4365 12.5243ZM22.5958 14.0441L21.8678 17.9956C21.9165 18.0043 21.9652 18.0088 22.0139 18.0088H22.1843C22.9635 18.0176 23.6128 17.934 24.1322 17.7577C24.6515 17.5727 25.0007 16.9296 25.1792 15.8282C25.3253 14.9031 25.1792 14.37 24.7409 14.2291C24.3107 14.0882 23.7711 14.0221 23.1217 14.0309C23.0243 14.0396 22.9311 14.0441 22.8417 14.0441H22.5958Z"
                fill="white"
              />
            </svg>
            <span class="text-gray-500 text-lg">PHP</span>
          </article>
          <article class="space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="40px"
              height="40px"
              viewBox="-52.5 0 361 361"
              version="1.1"
              preserveAspectRatio="xMidYMid"
            >
              <g>
                <path
                  d="M255.554813,70.7657143 L232.31367,331.125451 L127.843868,360.087912 L23.6617143,331.166242 L0.445186813,70.7657143 L255.554813,70.7657143 L255.554813,70.7657143 Z"
                  fill="#E44D26"
                >
                </path>
                <path
                  d="M128,337.950242 L212.416703,314.546637 L232.277802,92.0573187 L128,92.0573187 L128,337.950242 L128,337.950242 Z"
                  fill="#F16529"
                >
                </path>
                <path
                  d="M82.8202198,155.932132 L128,155.932132 L128,123.994725 L47.917011,123.994725 L48.6814945,132.562989 L56.530989,220.572835 L128,220.572835 L128,188.636132 L85.7389011,188.636132 L82.8202198,155.932132 L82.8202198,155.932132 Z"
                  fill="#EBEBEB"
                >
                </path>
                <path
                  d="M90.0177582,236.54189 L57.957978,236.54189 L62.4323516,286.687648 L127.853011,304.848879 L128,304.808088 L128,271.580132 L127.860044,271.617407 L92.2915165,262.013187 L90.0177582,236.54189 L90.0177582,236.54189 Z"
                  fill="#EBEBEB"
                >
                </path>
                <path
                  d="M24.1807473,0 L40.4107253,0 L40.4107253,16.0351648 L55.2573187,16.0351648 L55.2573187,0 L71.488,0 L71.488,48.5584176 L55.258022,48.5584176 L55.258022,32.2981978 L40.4114286,32.2981978 L40.4114286,48.5584176 L24.1814505,48.5584176 L24.1814505,0 L24.1807473,0 L24.1807473,0 Z"
                  fill="#000000"
                >
                </path>
                <path
                  d="M92.8309451,16.1026813 L78.5427692,16.1026813 L78.5427692,0 L123.356835,0 L123.356835,16.1026813 L109.06233,16.1026813 L109.06233,48.5584176 L92.8316484,48.5584176 L92.8316484,16.1026813 L92.8309451,16.1026813 L92.8309451,16.1026813 Z"
                  fill="#000000"
                >
                </path>
                <path
                  d="M130.469275,0 L147.392703,0 L157.802901,17.061978 L168.202549,0 L185.132308,0 L185.132308,48.5584176 L168.969143,48.5584176 L168.969143,24.4901978 L157.802901,41.7554286 L157.523692,41.7554286 L146.349714,24.4901978 L146.349714,48.5584176 L130.469275,48.5584176 L130.469275,0 L130.469275,0 Z"
                  fill="#000000"
                >
                </path>
                <path
                  d="M193.20967,0 L209.444571,0 L209.444571,32.5077802 L232.268659,32.5077802 L232.268659,48.5584176 L193.20967,48.5584176 L193.20967,0 L193.20967,0 Z"
                  fill="#000000"
                >
                </path>
                <path
                  d="M127.889582,220.572835 L167.216527,220.572835 L163.509451,261.992791 L127.889582,271.606857 L127.889582,304.833407 L193.362286,286.687648 L193.842637,281.291956 L201.347516,197.212132 L202.126769,188.636132 L127.889582,188.636132 L127.889582,220.572835 L127.889582,220.572835 Z"
                  fill="#FFFFFF"
                >
                </path>
                <path
                  d="M127.889582,155.854066 L127.889582,155.932132 L205.032791,155.932132 L205.673495,148.753582 L207.128615,132.562989 L207.892396,123.994725 L127.889582,123.994725 L127.889582,155.854066 L127.889582,155.854066 Z"
                  fill="#FFFFFF"
                >
                </path>
              </g>
            </svg>
            <span class="text-gray-500 text-lg">HTML</span>
          </article>
          <article class="space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="40px"
              height="40px"
              viewBox="-52.5 0 361 361"
              version="1.1"
              preserveAspectRatio="xMidYMid"
            >
              <g>
                <path
                  d="M127.843868,360.087912 L23.6617143,331.166242 L0.445186813,70.7657143 L255.554813,70.7657143 L232.31367,331.125451 L127.843868,360.087912 L127.843868,360.087912 Z"
                  fill="#264DE4"
                >
                </path>
                <path
                  d="M212.416703,314.546637 L232.277802,92.0573187 L128,92.0573187 L128,337.950242 L212.416703,314.546637 L212.416703,314.546637 Z"
                  fill="#2965F1"
                >
                </path>
                <path
                  d="M53.6685714,188.636132 L56.530989,220.572835 L128,220.572835 L128,188.636132 L53.6685714,188.636132 L53.6685714,188.636132 Z"
                  fill="#EBEBEB"
                >
                </path>
                <path
                  d="M47.917011,123.994725 L50.8202198,155.932132 L128,155.932132 L128,123.994725 L47.917011,123.994725 L47.917011,123.994725 Z"
                  fill="#EBEBEB"
                >
                </path>
                <path
                  d="M128,271.580132 L127.860044,271.617407 L92.2915165,262.013187 L90.0177582,236.54189 L57.957978,236.54189 L62.4323516,286.687648 L127.853011,304.848879 L128,304.808088 L128,271.580132 L128,271.580132 Z"
                  fill="#EBEBEB"
                >
                </path>
                <path
                  d="M60.4835165,0 L99.1648352,0 L99.1648352,16.1758242 L76.6593407,16.1758242 L76.6593407,32.3516484 L99.1648352,32.3516484 L99.1648352,48.5274725 L60.4835165,48.5274725 L60.4835165,0 L60.4835165,0 Z"
                  fill="#000000"
                >
                </path>
                <path
                  d="M106.901099,0 L145.582418,0 L145.582418,14.0659341 L123.076923,14.0659341 L123.076923,16.8791209 L145.582418,16.8791209 L145.582418,49.2307692 L106.901099,49.2307692 L106.901099,34.4615385 L129.406593,34.4615385 L129.406593,31.6483516 L106.901099,31.6483516 L106.901099,0 L106.901099,0 Z"
                  fill="#000000"
                >
                </path>
                <path
                  d="M153.318681,0 L192,0 L192,14.0659341 L169.494505,14.0659341 L169.494505,16.8791209 L192,16.8791209 L192,49.2307692 L153.318681,49.2307692 L153.318681,34.4615385 L175.824176,34.4615385 L175.824176,31.6483516 L153.318681,31.6483516 L153.318681,0 L153.318681,0 Z"
                  fill="#000000"
                >
                </path>
                <path
                  d="M202.126769,188.636132 L207.892396,123.994725 L127.889582,123.994725 L127.889582,155.932132 L172.892132,155.932132 L169.98611,188.636132 L127.889582,188.636132 L127.889582,220.572835 L167.216527,220.572835 L163.509451,261.992791 L127.889582,271.606857 L127.889582,304.833407 L193.362286,286.687648 L193.842637,281.291956 L201.347516,197.212132 L202.126769,188.636132 L202.126769,188.636132 Z"
                  fill="#FFFFFF"
                >
                </path>
              </g>
            </svg>
            <span class="text-gray-500 text-lg">CSS</span>
          </article>
          <article class="space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35px"
              height="35px"
              viewBox="0 0 1024 1024"
            >
              <circle cx="512" cy="512" r="512" style="fill:#13aa52" />
              <path
                d="M648.86 449.44c-32.34-142.73-108.77-189.66-117-207.59-9-12.65-18.12-35.15-18.12-35.15-.15-.38-.39-1.05-.67-1.7-.93 12.65-1.41 17.53-13.37 30.29-18.52 14.48-113.54 94.21-121.27 256.37-7.21 151.24 109.25 241.36 125 252.85l1.79 1.27v-.11c.1.76 5 36 8.44 73.34H526a726.68 726.68 0 0 1 13-78.53l1-.65a204.48 204.48 0 0 0 20.11-16.45l.72-.65c33.48-30.93 93.67-102.47 93.08-216.53a347.07 347.07 0 0 0-5.05-56.76zM512.35 659.12s0-212.12 7-212.08c5.46 0 12.53 273.61 12.53 273.61-9.72-1.17-19.53-45.03-19.53-61.53z"
                style="fill:#fff"
              />
            </svg>
            <span class="text-gray-500 text-lg">M-DB</span>
          </article>
          <article class="space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35px"
              height="35px"
              viewBox="0 0 32 32"
              ><title>file_type_db</title><path
                d="M8.562,15.256A21.159,21.159,0,0,0,16,16.449a21.159,21.159,0,0,0,7.438-1.194c1.864-.727,2.525-1.535,2.525-2V9.7a10.357,10.357,0,0,1-2.084,1.076A22.293,22.293,0,0,1,16,12.078a22.36,22.36,0,0,1-7.879-1.3A10.28,10.28,0,0,1,6.037,9.7v3.55C6.037,13.724,6.7,14.528,8.562,15.256Z"
                style="fill:#c4c7ce"
              /><path
                d="M8.562,21.961a15.611,15.611,0,0,0,2.6.741A24.9,24.9,0,0,0,16,23.155a24.9,24.9,0,0,0,4.838-.452,15.614,15.614,0,0,0,2.6-.741c1.864-.727,2.525-1.535,2.525-2v-3.39a10.706,10.706,0,0,1-1.692.825A23.49,23.49,0,0,1,16,18.74a23.49,23.49,0,0,1-8.271-1.348,10.829,10.829,0,0,1-1.692-.825V19.96C6.037,20.426,6.7,21.231,8.562,21.961Z"
                style="fill:#c4c7ce"
              /><path
                d="M16,30c5.5,0,9.963-1.744,9.963-3.894V23.269a10.5,10.5,0,0,1-1.535.762l-.157.063A23.487,23.487,0,0,1,16,25.445a23.422,23.422,0,0,1-8.271-1.351c-.054-.02-.106-.043-.157-.063a10.5,10.5,0,0,1-1.535-.762v2.837C6.037,28.256,10.5,30,16,30Z"
                style="fill:#c4c7ce"
              /><ellipse
                cx="16"
                cy="5.894"
                rx="9.963"
                ry="3.894"
                style="fill:#c4c7ce"
              /></svg
            >
            <span class="text-gray-500 text-lg">SqL</span>
          </article>
          <article class="space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40px"
              height="40px"
              viewBox="0 0 32 32"
              ><title>file_type_tailwind</title><path
                d="M9,13.7q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q11.1,10.9,9,13.7ZM2,22.1q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q4.1,19.3,2,22.1Z"
                style="fill:#44a8b3"
              /></svg
            >
            <span class="text-gray-500 text-lg">TailwindCSS</span>
          </article>
          <article class="space-x-2">
            <svg
              width="35px"
              height="35px"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.1725 2.29872C16.4627 1.89953 15.5373 1.90132 14.8269 2.29872C11.2689 4.26227 7.71082 6.22641 4.15216 8.18906C3.45969 8.55335 2.99264 9.29698 3.00009 10.0688V21.9328C2.99509 22.7197 3.48622 23.4705 4.19655 23.8298C5.21871 24.3736 6.2118 24.9726 7.25244 25.4802C8.45451 26.0709 9.95843 26.2015 11.1752 25.5855C12.1629 25.075 12.6016 23.9395 12.6003 22.896C12.6083 18.9806 12.6016 15.0651 12.6034 11.1496C12.6269 10.9756 12.4962 10.7896 12.3064 10.7938C11.8517 10.7866 11.3964 10.7896 10.9417 10.7926C10.7699 10.7764 10.6022 10.9191 10.6152 11.0918C10.6091 14.982 10.6164 18.8734 10.6115 22.7642C10.6214 23.3024 10.2578 23.8196 9.73913 24.0014C8.5412 24.4213 5.12198 22.2012 5.12198 22.2012C4.9965 22.1431 4.91682 22.007 4.92912 21.8718C4.92912 17.9576 4.92973 14.0433 4.92912 10.1297C4.91187 9.97191 5.00912 9.8298 5.15402 9.76538C8.70033 7.8134 12.2448 5.85654 15.7911 3.90336C15.9143 3.82115 16.086 3.8214 16.2089 3.90396C19.7552 5.85654 23.3003 7.81161 26.8472 9.76368C26.9926 9.828 27.0857 9.9725 27.0709 10.1297C27.0703 14.0433 27.0721 17.9576 27.0697 21.8713C27.0802 22.0098 27.0086 22.144 26.8793 22.2048C23.3661 24.1462 19.8129 26.025 16.3315 28.0228C16.1796 28.1099 16.0075 28.2086 15.8373 28.1126C14.9218 27.6062 14.0174 27.0801 13.1049 26.5688C13.0057 26.5069 12.8794 26.4803 12.7759 26.5496C12.3668 26.7652 11.982 26.9398 11.5122 27.1258C10.8524 27.387 10.9578 27.4938 11.5529 27.8405C12.62 28.4444 13.6889 29.0459 14.756 29.6504C15.4585 30.0888 16.4024 30.12 17.1275 29.7149C20.6861 27.7538 24.2436 25.7904 27.8029 23.8293C28.5113 23.468 29.0049 22.7202 28.9999 21.9327V10.0688C29.0068 9.31264 28.5576 8.58227 27.886 8.21259C24.3156 6.23947 20.7435 4.27064 17.1725 2.29872Z"
                fill="#8CC84B"
              />
              <path
                d="M22.5419 11.2062C21.1452 10.459 19.4836 10.4192 17.9315 10.5169C16.8102 10.6277 15.6309 10.9371 14.814 11.7409C13.9761 12.5489 13.7937 13.8537 14.1917 14.9085C14.4769 15.6539 15.1948 16.1386 15.9372 16.395C16.8935 16.7326 17.8979 16.837 18.9026 16.9414C19.819 17.0366 20.7357 17.1319 21.6165 17.4042C21.9763 17.5234 22.3953 17.7058 22.5055 18.0973C22.6073 18.5609 22.4957 19.0998 22.1193 19.4219C20.9237 20.3682 17.5979 20.2232 16.4166 19.4784C15.939 19.1611 15.7332 18.5994 15.6495 18.0641C15.6402 17.8973 15.5059 17.7443 15.3248 17.757C14.8713 17.7516 14.4178 17.7528 13.9643 17.7564C13.8061 17.7431 13.6416 17.8557 13.6329 18.0172C13.5397 20.4689 15.7914 21.5377 17.9039 21.773C19.1108 21.888 20.3442 21.8814 21.5327 21.6224C22.4261 21.419 23.3219 21.0444 23.9369 20.3563C24.6953 19.52 24.8444 18.2749 24.5043 17.2332C24.2443 16.4559 23.5012 15.9573 22.7416 15.7008C21.7086 15.3466 20.4844 15.1562 19.5488 15.0671C18.1889 14.9376 16.5729 14.9905 16.188 14.0969C16.0345 13.629 16.1651 13.048 16.5951 12.7602C17.7328 11.9885 20.0483 12.091 21.2265 12.6675C21.7675 12.9384 22.081 13.4948 22.2104 14.0565C22.2344 14.2215 22.3454 14.3937 22.5364 14.3865C22.9868 14.3955 23.4372 14.3889 23.8875 14.3895C24.0422 14.4003 24.2116 14.313 24.2418 14.1546C24.2227 12.9806 23.6232 11.7788 22.5419 11.2062Z"
                fill="#8CC84B"
              />
            </svg>
            <span class="text-gray-500 text-lg">NodeJS</span>
          </article>
          <article class="space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="35px"
              height="35px"
              viewBox="0 -0.5 48 48"
              version="1.1"
            >
              <title>Github-color</title>
              <desc>Created with Sketch.</desc>
              <defs> </defs>
              <g
                id="Icons"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
              >
                <g
                  id="Color-"
                  transform="translate(-700.000000, -560.000000)"
                  fill="#3E75C3"
                >
                  <path
                    d="M723.9985,560 C710.746,560 700,570.787092 700,584.096644 C700,594.740671 706.876,603.77183 716.4145,606.958412 C717.6145,607.179786 718.0525,606.435849 718.0525,605.797328 C718.0525,605.225068 718.0315,603.710086 718.0195,601.699648 C711.343,603.155898 709.9345,598.469394 709.9345,598.469394 C708.844,595.686405 707.2705,594.94548 707.2705,594.94548 C705.091,593.450075 707.4355,593.480194 707.4355,593.480194 C709.843,593.650366 711.1105,595.963499 711.1105,595.963499 C713.2525,599.645538 716.728,598.58234 718.096,597.964902 C718.3135,596.407754 718.9345,595.346062 719.62,594.743683 C714.2905,594.135281 708.688,592.069123 708.688,582.836167 C708.688,580.205279 709.6225,578.054788 711.1585,576.369634 C710.911,575.759726 710.0875,573.311058 711.3925,569.993458 C711.3925,569.993458 713.4085,569.345902 717.9925,572.46321 C719.908,571.928599 721.96,571.662047 724.0015,571.651505 C726.04,571.662047 728.0935,571.928599 730.0105,572.46321 C734.5915,569.345902 736.603,569.993458 736.603,569.993458 C737.9125,573.311058 737.089,575.759726 736.8415,576.369634 C738.3805,578.054788 739.309,580.205279 739.309,582.836167 C739.309,592.091712 733.6975,594.129257 728.3515,594.725612 C729.2125,595.469549 729.9805,596.939353 729.9805,599.18773 C729.9805,602.408949 729.9505,605.006706 729.9505,605.797328 C729.9505,606.441873 730.3825,607.191834 731.6005,606.9554 C741.13,603.762794 748,594.737659 748,584.096644 C748,570.787092 737.254,560 723.9985,560"
                    id="Github"
                  >
                  </path>
                </g>
              </g>
            </svg>
            <span class="text-gray-500 text-lg">Github</span>
          </article>
          <article class="space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35px"
              height="35px"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M2 12.1333C2 8.58633 2 6.81283 2.69029 5.45806C3.29749 4.26637 4.26637 3.29749 5.45806 2.69029C6.81283 2 8.58633 2 12.1333 2H19.8667C23.4137 2 25.1872 2 26.5419 2.69029C27.7336 3.29749 28.7025 4.26637 29.3097 5.45806C30 6.81283 30 8.58633 30 12.1333V19.8667C30 23.4137 30 25.1872 29.3097 26.5419C28.7025 27.7336 27.7336 28.7025 26.5419 29.3097C25.1872 30 23.4137 30 19.8667 30H12.1333C8.58633 30 6.81283 30 5.45806 29.3097C4.26637 28.7025 3.29749 27.7336 2.69029 26.5419C2 25.1872 2 23.4137 2 19.8667V12.1333Z"
                fill="#E6001F"
              />
              <path
                d="M7 23C7 23 13.2207 8.00393 13.2059 8C13.2059 8 13.2059 8 13.2059 8H13.2059H17.9301L25 23L19.6601 23C19.6641 23.0079 15.6563 13.7963 15.606 13.7037C15.5972 13.784 12.9484 19.9491 12.9164 19.9567H15.771C15.758 19.9724 17.0122 22.9714 17.0122 23L7 23Z"
                fill="white"
              />
            </svg>
            <span class="text-gray-500 text-lg">Adobe</span>
          </article>
        </div>
      </div>
    </div>
  </section>
  <Testemunhas />
  <Price />
  <Contact />
  <section>
     <div class="container max-w-4xl px-6 py-10 mx-auto">
      <h1 class="text-2xl font-semibold text-center text-gray-800 lg:text-3xl dark:text-white">Questões frequentes</h1>
      <FaQ
      question="lorem iplom dolor sit amet?"
      answer="Lorem ipsum dolor, sit amet consectetur adipisicing elit. A libero
            necessitatibus vitae, sunt atque dolore repudiandae quia, alias veniam
            doloribus laborum sapiente perferendis! Voluptatibus tempore porro,
            laborum ducimus quidem ex."
    />
    <FaQ
      question="lorem iplom dolor kkkk ?"
      answer="Lorem ipsum dolor, sit amet consectetur adipisicing elit. A libero
            necessitatibus vitae, sunt atque dolore repudiandae quia, alias veniam
            doloribus laborum sapiente perferendis! Voluptatibus tempore porro,
            laborum ducimus quidem ex."
    />
    <FaQ
      question="lorem iplom dolor kkkk ?"
      answer="Lorem ipsum dolor, sit amet consectetur adipisicing elit. A libero
            necessitatibus vitae, sunt atque dolore repudiandae quia, alias veniam
            doloribus laborum sapiente perferendis! Voluptatibus tempore porro,
            laborum ducimus quidem ex."
    />
    <FaQ
      question="lorem iplom dolor kkkk ?"
      answer="Lorem ipsum dolor, sit amet consectetur adipisicing elit. A libero
            necessitatibus vitae, sunt atque dolore repudiandae quia, alias veniam
            doloribus laborum sapiente perferendis! Voluptatibus tempore porro,
            laborum ducimus quidem ex."
    />
     </div>
  </section>

</body>
