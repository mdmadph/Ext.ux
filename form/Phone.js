/**
 * @author		M D McNamara
 * @class		Ext.ux.form.Phone
 *
 */

Ext.define('Ext.ux.form.Phone', {
	extend: 'Ext.form.field.Text',
	alias: 'widget.phone',
	
	statics: {
		validPhoneRegexMsg: "Please enter a valid phone number with area code.",
		PhoneMask: /\d|-/
	},
	
	initComponent: function () {
		if (!Ext.form.field.VTypes.phone) {
			Ext.apply(Ext.form.field.VTypes, {
				phone: function (val) {
					return (/^\d{3}(\-)?\d{3}(\-)?\d{4}$/).test(val);
				},
				phoneText: this.self.validPhoneRegexMsg,
				phoneMask: this.self.PhoneMask
			});
		}
		
		Ext.apply(this, {
			vtype: 'phone',
			maxLength: 12,
			enforceMaxLength: true, 
			listeners: {
				validitychange: this.onValidChange
			}
		});
		
		this.callParent(arguments);
	},
	
	onValidChange: function(field, isValid) {
		var _value = field.getValue(),
		_phoneRegex = /^(\d{3})(\d{3})(\d{4})$/,
		_result = null;
		
		if (_value.length == 10) {
			_result = _phoneRegex.exec(_value);
			if (_result) {
				field.setValue(
					_result[1] + "-" + _result[2] + "-" + _result[3]
				);
			}
		}
	}
});