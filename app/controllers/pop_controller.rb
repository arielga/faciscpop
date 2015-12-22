class PopController < ApplicationController

	FORMATOS_SUPORTADOS={
   	:pdf => 'application/pdf'
   }

	def index
	end

	def show
		@pop = OpenStruct.new(params)
		respond_to do |format|
	      format.html
	      format.pdf do
	        render pdf: "pop - #{I18n.transliterate(@pop.nome)}", 
	        			template: 'pop/pop.pdf.erb',
	        			background: true,
	        			page_size: 'A4',
	        			zoom: 1
	      end
	   end				
	end
end
