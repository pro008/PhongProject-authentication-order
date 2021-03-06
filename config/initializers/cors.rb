Rails.application.config.middleware.insert_before 0, Rack::Cors do
	allow do
		origins "http://localhost:8080"
		resource "*", headers: :any, methods: [:get, :post, :patch, :delete, :options, :head],
		credentials: true
	end

	# allow do
	# 	origins "https://authencation_production-react.mydomain.com"
	# 	resource "*", headers: :any, methods: [:get, :post, :patch, :delete, :options, :head],
	# 	credentials: true
	# end
end