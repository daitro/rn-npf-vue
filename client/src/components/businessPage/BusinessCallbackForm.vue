<template>
	<section class="application-form" id="business-callback-form">
		<div class="application-form__container">
			<h3 class="application-form__caption">Свяжитесь с нами</h3>
			<h1 class="application-form__header">
				Планируете незабываемый отдых? Мы предлагаем оформить кредит наличными
				по специальной ставке от 7,5%
			</h1>
			<transition name="modal">
				<div v-if="showModalWindow" class="modal-window">
					<div class="modal-window__container">
						<p class="modal-window__title">
							Мы перезвоним Вам в ближайшее время!
						</p>
						<p class="modal-window__text">Ваши данные успешно отправлены</p>
						<p class="modal-window__subtext">
							Это окно закроется автоматически
						</p>
					</div>
				</div>
			</transition>
			<div class="application-form__controls-block">
				<GuiInput
					:label="number.label"
					v-model="number.value"
					:id="number.id"
					:hasError="number.hasError"
					:hasTouchedInput="number.hasTouchedInput"
					:textError="number.textError"
					@input="phoneCheck"
				/>
				<GuiInput
					:label="name.label"
					v-model="name.value"
					:id="name.id"
					:hasError="name.hasError"
					:hasTouchedInput="name.hasTouchedInput"
					:textError="name.textError"
					@input="nameCheck"
				/>
				<GuiInput
					:label="mail.label"
					v-model="mail.value"
					:id="mail.id"
					:hasError="mail.hasError"
					:hasTouchedInput="mail.hasTouchedInput"
					:textError="mail.textError"
					@input="mailCheck"
				/>
			</div>
			<GuiPrimaryButton
				@click.native="submitFormToServer"
				:disabled="isSubmitDisabled"
			/>
		</div>
	</section>
</template>

<script>
import GuiInput from "../gui/GuiInput.vue";
import GuiPrimaryButton from "../gui/GuiPrimaryButton.vue";

export default {
	data() {
		return {
			showModalWindow: false,
			isSubmitDisabled: true,
			number: {
				label: "Телефон",
				value: "",
				id: "number",
				hasError: false,
				hasTouchedInput: false,
				textError: "Пожалуйста, введите корректный номер",
			},
			name: {
				label: "Как вас зовут",
				value: "",
				id: "name",
				hasError: false,
				hasTouchedInput: false,
				textError: "Имя не дожно быть меньше двух букв",
			},
			mail: {
				label: "Электронная почта",
				value: "",
				id: "mail",
				hasError: false,
				hasTouchedInput: false,
				textError: "Пожалуйста, введите корректный e-mail",
			},
		};
	},
	components: {
		GuiInput,
		GuiPrimaryButton,
	},
	methods: {
		nameCheck() {
			this.name.hasTouchedInput = true;
			if (this.name.value.length < 3) {
				this.name.hasError = true;
			} else {
				this.name.hasError = false;
			}
			this.checkValidateForm();
		},

		mailCheck() {
			this.mail.hasTouchedInput = true;
			if (!this.mail.value.includes("@") || this.mail.value.length < 5) {
				this.mail.hasError = true;
			} else {
				this.mail.hasError = false;
			}
			this.checkValidateForm();
		},

		phoneCheck() {
			this.number.hasTouchedInput = true;
			let re = /^(8|\+7)\d{10}$/;
			if ((this.number.hasError = !re.test(this.number.value))) {
				this.number.hasError = true;
			} else {
				this.number.hasError = false;
			}
			this.checkValidateForm();
		},

		checkValidateForm() {
			let checkValidateNumber =
				this.number.hasTouchedInput && !this.number.hasError;
			let checkValidateName = this.name.hasTouchedInput && !this.name.hasError;
			let checkValidateMail = this.mail.hasTouchedInput && !this.mail.hasError;

			this.isSubmitDisabled =
				!checkValidateNumber || !checkValidateName || !checkValidateMail;
		},

		submitFormToServer() {
			this.showModalWindow = true;
			setTimeout(() => {
				this.showModalWindow = false;
			}, 5000);
			this.name.value = "";
			this.mail.value = "";
			this.number.value = "";

			this.isSubmitDisabled = true;
		},
	},
};
</script>

<style lang="scss" scoped>
.application-form {
	background-color: $bg-gray;
	position: relative;

	&__container {
		max-width: 960px;
		margin: 0 auto;
		padding: 24px 24px;

		@media screen and (min-width: 768px) {
			padding: 72px 24px;
		}
	}

	&__caption {
		font-size: 13px;
		line-height: 24px;
		color: $gray1;
		margin-bottom: 24px;
	}

	&__header {
		font-size: 24px;
		line-height: 30px;
		font-weight: 500;

		@media screen and (min-width: 768px) {
			font-size: 34px;
			line-height: 48px;
		}
	}

	&__controls-block {
		margin: 24px 0;
		display: flex;
		justify-content: space-between;
		flex-direction: column;

		@media screen and (min-width: 992px) {
			flex-direction: row;
			margin: 48px 0;
		}
	}
}

.modal-window {
	max-width: 280px;
	width: 100%;
	height: 250px;
	box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.15);
	border-radius: 14px;
	background-color: $white;
	position: absolute;
	left: 50%;
	top: 50%;
	margin-top: -100px;
	margin-left: -140px;
	z-index: 2;

	@media screen and (min-width: 768px) {
		max-width: 520px;
		width: 100%;
		height: 200px;
		left: 50%;
		top: 50%;
		margin-top: -100px;
		margin-left: -260px;
	}

	&__container {
		padding: 24px 24px 36px;
	}

	&__title {
		font-size: 24px;
		font-weight: 600;
		line-height: 36px;
		text-align: center;
	}

	&__text {
		font-size: 16px;
		line-height: 24px;
		text-align: center;
		margin-top: 12px;
	}

	&__subtext {
		font-size: 12px;
		line-height: 24px;
		text-align: center;
		margin-top: 12px;
		color: $gray3;
	}
}

.modal-enter-active,
.modal-leave-active {
	transition: opacity 0.6s;
}

.modal-enter,
.modal-leave-to {
	opacity: 0;
}
</style>
