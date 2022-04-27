<template>
	<section class="portfolio-block">
		<h1 class="header">Структура портфеля</h1>
		<div class="percent-block">
			<div class="percent-block__container">
				<div class="percent-block__info">
					<div class="list-items">
						<div
							v-for="(item, index) of listItems"
							:key="index"
							class="list-items__item"
						>
							<div
								:style="{ 'background-color': `${item.color}` }"
								class="list-items__square"
							></div>
							<p class="list-items__percent">
								{{ item.percent }}
							</p>
							<p class="list-items__name">
								{{ item.name }}
							</p>
						</div>
					</div>

					<div class="index-block">
						<p class="index-block__name">10%</p>
						<img src="images/investPageDiagram.jpg" alt="" />
						<p class="index-block__text">Ставка доходности за 2019 год</p>
					</div>
				</div>

				<article class="percent-block__article">
					«Южный банк» осуществляет инвестирование пенсионных резервов в
					интересах участников Фонда на принципах сохранности и надежности, в
					соответствии с действующим законодательством РФ и корпоративной
					инвестиционной политикой, которая: - основана на анализе
					макроэкономических тенденций и финансовых рынков в долгосрочной
					перспективе, - предусматривает широкую диверсификацию инвестиционных
					портфелей, - предписывает четкий контроль и регулярное отслеживание
					динамики инвестиционных портфелей.
				</article>
				<article class="percent-block__article">
					Основной профиль банка – обслуживание клиентов малого и среднего
					бизнеса. Для наших клиентов важно, чтобы банк не просто смотрел на
					финансовое положение бизнеса, но и видел за ним конкретных людей,
					которые развивают этот бизнес. В новом знаке заложена идея
					человеческих отношений в виде рукопожатия двух людей. Основной посыл
					бренда, что главная ценность — это люди, наши клиенты и сотрудники.
					Слоган обновленного бренда — «Дело в людях» — также подчеркивает
					философию компании, т.к. за каждым счетом банк видит реальных людей,
					индивидуально подходит к каждому клиенту и вникает в его бизнес.
				</article>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	data() {
		return {
			listItems: [
				{
					percent: "46%",
					name: "Субфедеральные облигации",
					color: "#ff025a",
				},
				{
					percent: "12%",
					name: "Государственные облигации",
					color: "#04999a",
				},
				{ percent: "28%", name: "Банковские депозиты", color: "#cedc01" },
				{
					percent: "14%",
					name: "Корпоративные облигации",
					color: "#50287d",
				},
			],
		};
	},
};
</script>

<style lang="scss" scoped>
.percent-block {
	&__info {
		display: flex;
		flex-direction: column;
		margin-bottom: 24px;

		@media screen and (min-width: 576px) {
			flex-direction: row;
		}
	}

	&__article {
		font-size: 16px;
		line-height: 24px;
		color: $gray2;
		margin-bottom: 24px;
	}
}

.portfolio-block {
	max-width: 960px;
	margin: 0 auto;
	padding: 0 24px 24px;
}

.header {
	font-size: 34px;
	line-height: 48px;
	margin-bottom: 24px;
}

.list-items {
	display: flex;
	flex-direction: column;

	&__item {
		position: relative;
		max-width: 220px;
		display: flex;
		align-items: flex-start;
		margin: 24px 0;
	}

	&__percent {
		max-width: 48px;
		width: 100%;
		font-size: 18px;
		line-height: 24px;
		font-weight: 600;
		padding-left: 20px;
		color: $main-dark;
	}

	&__square {
		position: absolute;
		flex: none;
		width: 8px;
		height: 8px;
		top: 8px;
	}

	&__name {
		font-size: 13px;
		line-height: 24px;
		color: $gray2;
		margin-left: 24px;
	}
}

.index-block {
	height: 264px;
	max-width: 160px;
	border: 1px solid $gray5;
	padding: 24px;
	margin-bottom: 24px;

	@media screen and (min-width: 576px) {
		margin: 24px 0 0 24px;
	}

	&__name {
		font-size: 34px;
		line-height: 48px;
		font-weight: 600;
		margin-bottom: 24px;
	}

	&__text {
		font-size: 15px;
		line-height: 24px;
		color: $gray2;
		margin-top: 24px;
	}
}
</style>
