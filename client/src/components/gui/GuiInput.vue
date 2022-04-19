<template>
	<div class="control">
		<label class="control__label" :for="id">{{ label }}</label>
		<input
			:id="id"
			type="text"
			:value="value"
			:class="{
				control__input: true,
				'control__input--error': hasError,
			}"
			@input="handleInputChange"
		/>
		<div v-if="hasError" class="control__text-error">{{ textError }}</div>
	</div>
</template>

<script>
export default {
	props: {
		label: {
			type: String,
			required: true,
		},
		value: {
			type: String,
			default: "",
		},
		id: {
			type: String,
			required: true,
		},
		hasError: {
			type: Boolean,
		},
		hasTouchedInput: {
			type: Boolean,
		},
		textError: {
			type: String,
		},
	},
	methods: {
		handleInputChange(event) {
			this.$emit("input", event.target.value);
		},
	},
};
</script>

<style lang="scss" scoped>
.control {
	max-width: 300px;
	position: relative;
	display: flex;
	flex-direction: column;
	margin-bottom: 24px;

	@media screen and (min-width: 992px) {
		width: 100%;
		margin-bottom: 0;
	}

	&:not(&:last-child) {
		margin-right: 0;

		@media screen and (min-width: 992px) {
			margin-right: 40px;
		}
	}

	&__label {
		font-size: 12px;
		line-height: 16px;
		color: $gray2;
		cursor: pointer;
	}

	&__input {
		border-bottom: 1px solid $gray4;
		line-height: 24px;
		height: 36px;

		&:hover {
			border-color: $primary;
		}

		&:focus {
			border-bottom: 2px solid $primary;
		}

		&--error {
			border-bottom: 1px solid rgb(233, 22, 57);
		}
	}

	&__text-error {
		position: absolute;
		bottom: -16px;
		font-size: 11px;
		line-height: 16px;
		color: rgb(233, 22, 57);
	}
}
</style>
